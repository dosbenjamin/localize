import { type ReadProjectOutput, ReadProjectOutputSchema } from '@localize/web/features/projects'
import { cache } from 'react'
import { createClient } from '@localize/web/libs/supabase/server'

export const readProjects = cache(async (): Promise<ReadProjectOutput[]> => {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: projects } = await supabase
    .from('projects')
    .select('*, dictionaries(*, languages(*)), affiliates(*)')
    .order('created_at', { ascending: false })

  if (!projects) return Promise.reject()

  const projectsWithUserRole = await Promise.all(
    projects.map(({ affiliates, ...project }) => {
      if (!affiliates || !Array.isArray(affiliates)) return Promise.reject()
      const userRole = affiliates.find(({ profile_id }) => profile_id === user?.id)?.role
      return { affiliates, userRole, ...project }
    }),
  )

  return ReadProjectOutputSchema.array().parse(projectsWithUserRole)
})

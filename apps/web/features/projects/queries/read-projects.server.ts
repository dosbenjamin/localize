import { type ReadProjectOutput, ReadProjectOutputSchema } from '@localize/web/features/projects'
import type { Database } from '@localize/web/libs/supabase/client'
import type { SupabaseClient } from '@supabase/supabase-js'

export const readProjects = async (supabase: SupabaseClient<Database>): Promise<ReadProjectOutput[]> => {
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
      const role = affiliates.find(({ profile_id }) => profile_id === user?.id)?.role
      return { affiliates, role, ...project }
    }),
  )

  return ReadProjectOutputSchema.array().parse(projectsWithUserRole)
}

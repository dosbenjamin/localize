import { type ReadProjectOutput, ReadProjectOutputSchema } from '@localize/web/features/projects'
import { cache } from 'react'
import { createClient } from '@localize/web/libs/supabase/server'
import { z } from 'zod'

export const readProjectById = cache(async (id: string): Promise<ReadProjectOutput> => {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const projectId = z.string().uuid().parse(id)

  const { data: project } = await supabase
    .from('projects')
    .select('*, dictionaries(*, languages(*)), affiliates(*)')
    .eq('id', projectId)
    .single()

  if (!project || !Array.isArray(project.affiliates)) return Promise.reject()

  const projectWithUserRole = {
    ...project,
    userRole: project.affiliates.find(({ profile_id }) => profile_id === user?.id)?.role,
  }

  return ReadProjectOutputSchema.parse(projectWithUserRole)
})

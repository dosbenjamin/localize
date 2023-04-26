import { type ReadProjectOutput, ReadProjectOutputSchema } from '@localize/web/features/projects'
import { createClient } from '@localize/web/libs/supabase/server'
import { z } from 'zod'

export const readProjects = async (): Promise<ReadProjectOutput[]> => {
  const supabase = createClient()

  const { data: projects } = await supabase
    .from('current_user_projects')
    .select('*, dictionaries(*, languages(*)), affiliates(*)')
    .order('created_at', { ascending: false })

  return ReadProjectOutputSchema.array().parse(projects)
}

export const readProjectById = async (id: string): Promise<ReadProjectOutput> => {
  const supabase = createClient()

  const projectId = z.string().uuid().parse(id)

  const { data: project } = await supabase
    .from('current_user_projects')
    .select('*, dictionaries(*, languages(*)), affiliates(*)')
    .eq('id', projectId)
    .single()

  return ReadProjectOutputSchema.parse(project)
}

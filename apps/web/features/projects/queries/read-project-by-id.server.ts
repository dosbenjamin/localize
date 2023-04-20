import { type ReadProjectOutput, ReadProjectOutputSchema } from '@localize/web/features/projects'
import { createClient } from '@localize/web/libs/supabase/server'
import { z } from 'zod'

export const readProjectById = async (id: string): Promise<ReadProjectOutput> => {
  const supabase = createClient()

  const projectId = z.string().uuid().parse(id)

  const { data: project } = await supabase.from('current_user_projects').select('*').eq('id', projectId).single()

  return ReadProjectOutputSchema.parse(project)
}

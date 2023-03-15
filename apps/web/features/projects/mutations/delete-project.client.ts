import { type DeleteProjectInput, DeleteProjectInputSchema } from '@localize/web/features/projects'
import { supabase } from '@localize/web/libs/supabase/client'

export const deleteClient = async (id: DeleteProjectInput): Promise<void> => {
  try {
    const projectId = DeleteProjectInputSchema.parse(id)
    await supabase.from('projects').delete().eq('id', projectId)
    return Promise.resolve()
  } catch {
    return Promise.reject()
  }
}

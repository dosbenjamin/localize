import { DeleteProjectSchema, type DeleteProjectValue } from '@localize/web/features/projects/client'
import { supabase } from '@localize/web/libs/supabase/client'

export const deleteClient = async (id: DeleteProjectValue): Promise<void> => {
  try {
    const projectId = DeleteProjectSchema.parse(id)
    await supabase.from('projects').delete().eq('id', projectId)
    return Promise.resolve()
  } catch {
    return Promise.reject()
  }
}

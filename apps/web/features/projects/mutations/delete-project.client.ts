import { DeleteProjectSchema, type DeleteProjectValue } from '@localize/web/features/projects/client'
import { supabase } from '@localize/web/libs/supabase/client'

export const deleteClient = async (id: DeleteProjectValue): Promise<void> => {
  const projectId = DeleteProjectSchema.parse(id)
  const { error } = await supabase.from('projects').delete().eq('id', projectId)

  if (error) {
    return Promise.reject(error)
  }

  return Promise.resolve()
}

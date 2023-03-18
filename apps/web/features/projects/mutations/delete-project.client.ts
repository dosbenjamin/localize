import { supabase } from '@localize/web/libs/supabase/client'
import { z } from 'zod'

export const deleteProject = async (id: string): Promise<void> => {
  try {
    const projectId = z.string().uuid().parse(id)

    await supabase.from('projects').delete().eq('id', projectId)

    return Promise.resolve()
  } catch {
    return Promise.reject()
  }
}

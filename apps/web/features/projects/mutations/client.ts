import { type CreateProjectInput } from '@localize/web/features/projects'
import { supabase } from '@localize/web/libs/supabase/client'
import { z } from 'zod'

export const createProject = async (values: CreateProjectInput): Promise<void> => {
  const { error } = await supabase.rpc('create_project', values)
  return error ? Promise.reject(error.message) : Promise.resolve()
}

export const deleteProject = async (id: string): Promise<void> => {
  try {
    const projectId = z.string().uuid().parse(id)

    await supabase.from('projects').delete().eq('id', projectId)

    return Promise.resolve()
  } catch {
    return Promise.reject()
  }
}

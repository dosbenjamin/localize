import { type CreateProjectInput } from '@localize/web/features/projects'
import { supabase } from '@localize/web/libs/supabase/client'

export const createProject = async (values: CreateProjectInput): Promise<void> => {
  const { error } = await supabase.rpc('create_project', values)
  return error ? Promise.reject() : Promise.resolve()
}

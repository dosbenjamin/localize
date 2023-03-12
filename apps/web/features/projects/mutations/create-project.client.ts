import {
  type CreateProjectValues,
  ReadProjectSchema,
  type ReadProjectValues,
} from '@localize/web/features/projects/client'
import { supabase } from '@localize/web/libs/supabase/client'

export const createProject = async (values: CreateProjectValues): Promise<ReadProjectValues[]> => {
  const { data, error } = await supabase.rpc('create_project', values)

  if (error) {
    return Promise.reject(error)
  }

  return Promise.resolve(ReadProjectSchema.array().parse(data))
}

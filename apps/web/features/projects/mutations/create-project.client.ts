import {
  type CreateProjectInput,
  type CreateProjectOutput,
  CreateProjectOutputSchema,
} from '@localize/web/features/projects'
import { supabase } from '@localize/web/libs/supabase/client'

export const createProject = async (values: CreateProjectInput): Promise<CreateProjectOutput> => {
  const { data, error } = await supabase.rpc('create_project', values)

  if (error) {
    return Promise.reject()
  }

  return Promise.resolve(CreateProjectOutputSchema.parse(data))
}

import {
  type CreateDictionaryInput,
  type CreateDictionaryOutput,
  CreateDictionaryOutputSchema,
} from '@localize/web/features/projects'
import { supabase } from '@localize/web/libs/supabase/client'

export const createDictionary = async (values: CreateDictionaryInput): Promise<CreateDictionaryOutput> => {
  const { data, error } = await supabase.rpc('create_dictionary', values)

  if (error) {
    return Promise.reject()
  }

  return Promise.resolve(CreateDictionaryOutputSchema.parse(data))
}

import {
  type CreateDictionaryValues,
  ReadDictionarySchema,
  type ReadDictionaryValues,
} from '@localize/web/features/projects/client'
import { supabase } from '@localize/web/libs/supabase/client'

export const createDictionary = async (values: CreateDictionaryValues): Promise<ReadDictionaryValues[]> => {
  const { data, error } = await supabase.rpc('create_dictionary', values)

  if (error) {
    return Promise.reject()
  }

  return Promise.resolve(ReadDictionarySchema.array().parse(data))
}

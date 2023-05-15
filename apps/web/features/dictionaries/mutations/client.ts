import type { CreateDictionaryInput } from '@localize/web/features/dictionaries'
import { supabase } from '@localize/web/libs/supabase/client'

export const createDictionary = async (values: CreateDictionaryInput): Promise<void> => {
  const { error } = await supabase.rpc('create_dictionary', values)
  return error ? Promise.reject(error.message) : Promise.resolve()
}

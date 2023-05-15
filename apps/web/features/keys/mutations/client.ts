import type { CreateKeyInput } from '@localize/web/features/keys'
import { supabase } from '@localize/web/libs/supabase/client'

export const createKey = async (values: CreateKeyInput): Promise<void> => {
  const { error } = await supabase.from('keys').insert(values)
  return error ? Promise.reject(error.message) : Promise.resolve()
}

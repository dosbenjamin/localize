import { supabase } from '@localize/web/libs/supabase/client'

export const signOut = async (): Promise<void> => {
  const { error } = await supabase.auth.signOut()
  return error ? Promise.reject(error.message) : Promise.resolve()
}

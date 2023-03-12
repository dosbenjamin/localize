import { supabase } from '@localize/web/libs/supabase/client'

export const signOut = async (): Promise<void> => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    return Promise.reject(error)
  }

  return Promise.resolve()
}

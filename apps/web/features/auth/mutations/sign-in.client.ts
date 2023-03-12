import type { AuthResponse } from '@supabase/supabase-js'
import type { SignInValues } from '@localize/web/features/auth/client'
import { supabase } from '@localize/web/libs/supabase/client'

export const signIn = async (credentials: SignInValues): Promise<AuthResponse['data']> => {
  const { data, error } = await supabase.auth.signInWithPassword(credentials)

  if (error) {
    return Promise.reject(error)
  }

  return Promise.resolve(data)
}

import type { AuthResponse } from '@supabase/supabase-js'
import type { SignInInput } from '@localize/web/features/auth'
import { supabase } from '@localize/web/libs/supabase/client'

export const signIn = async (credentials: SignInInput): Promise<AuthResponse['data']> => {
  const { data, error } = await supabase.auth.signInWithPassword(credentials)

  if (error) {
    return Promise.reject(error.message)
  }

  return Promise.resolve(data)
}

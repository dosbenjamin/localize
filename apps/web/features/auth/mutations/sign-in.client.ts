import type { AuthResponse } from '@supabase/supabase-js'
import type { SignInInput } from '@localize/web/features/auth'
import { supabase } from '@localize/web/libs/supabase/client'

export const signIn = async (credentials: SignInInput): Promise<AuthResponse['data']> => {
  const { data: auth, error } = await supabase.auth.signInWithPassword(credentials)
  return error ? Promise.reject(error.message) : Promise.resolve(auth)
}

import type { AuthResponse } from '@supabase/supabase-js'
import type { SignUpInput } from '@localize/web/features/auth'
import { supabase } from '@localize/web/libs/supabase/client'

export const signUp = async (credentials: SignUpInput): Promise<AuthResponse['data']> => {
  const { data: auth, error } = await supabase.auth.signUp(credentials)
  return error ? Promise.reject(error.message) : Promise.resolve(auth)
}

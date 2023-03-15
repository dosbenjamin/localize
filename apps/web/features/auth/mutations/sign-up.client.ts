import type { AuthResponse } from '@supabase/supabase-js'
import type { SignUpInput } from '@localize/web/features/auth'
import { supabase } from '@localize/web/libs/supabase/client'

export const signUp = async (credentials: SignUpInput): Promise<AuthResponse['data']> => {
  const { data, error } = await supabase.auth.signUp(credentials)

  if (error) {
    return Promise.reject(error.message)
  }

  return Promise.resolve(data)
}

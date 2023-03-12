import type { AuthResponse } from '@supabase/supabase-js'
import type { SignUpValues } from '@localize/web/features/auth/client'
import { supabase } from '@localize/web/libs/supabase/client'

export const signUp = async (credentials: SignUpValues): Promise<AuthResponse['data']> => {
  const { data, error } = await supabase.auth.signUp(credentials)

  if (error) {
    return Promise.reject(error.message)
  }

  return Promise.resolve(data)
}

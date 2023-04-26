import type { AuthResponse } from '@supabase/supabase-js'
import type { SignInInput } from '@localize/web/features/auth'
import type { SignUpInput } from '@localize/web/features/auth'
import { supabase } from '@localize/web/libs/supabase/client'

export const signIn = async (credentials: SignInInput): Promise<AuthResponse['data']> => {
  const { data: auth, error } = await supabase.auth.signInWithPassword(credentials)
  return error ? Promise.reject(error.message) : Promise.resolve(auth)
}

export const signOut = async (): Promise<void> => {
  const { error } = await supabase.auth.signOut()
  return error ? Promise.reject(error.message) : Promise.resolve()
}

export const signUp = async (credentials: SignUpInput): Promise<AuthResponse['data']> => {
  const { data: auth, error } = await supabase.auth.signUp(credentials)
  return error ? Promise.reject(error.message) : Promise.resolve(auth)
}

'use client'

import { supabase } from 'lib/supabase.client'
import { useMutation } from 'react-query'
import type { SignInSchema } from '../schemas/sign-in'

export const useSignIn = () => {
  return useMutation(async (credentials: SignInSchema) => {
    const { error } = await supabase.auth.signInWithPassword(credentials)

    if (error) {
      return Promise.reject('Invalid login credentials')
    }

    return Promise.resolve('Successfully logged in')
  })
}

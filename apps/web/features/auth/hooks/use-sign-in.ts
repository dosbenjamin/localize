'use client'

import { useMutation } from '@tanstack/react-query'
import { supabase } from 'lib/supabase.client'
import type { SignInSchema } from '../schemas/sign-in'

export const useSignIn = () => {
  return useMutation(async (credentials: SignInSchema) => {
    const { error } = await supabase.auth.signInWithPassword(credentials)

    if (error) {
      return Promise.reject(error.message)
    }

    return Promise.resolve('Successfully signed in')
  })
}

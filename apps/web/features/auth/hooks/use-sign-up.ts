'use client'

import { supabase } from 'lib/supabase.client'
import { useMutation } from 'react-query'
import type { SignUpSchema } from '../schemas/sign-up'

export const useSignUp = () => {
  return useMutation(async (credentials: SignUpSchema) => {
    const { error } = await supabase.auth.signUp(credentials)

    if (error) {
      return Promise.reject(error.message)
    }

    return Promise.resolve('Successfully signed up')
  })
}

import type { SignInSchema } from 'features/auth/client'
import { supabase } from 'lib/supabase.client'
import { useMutation } from '@tanstack/react-query'

export const useSignIn = () => {
  return useMutation({
    mutationFn: async (credentials: SignInSchema) => {
      const { data, error } = await supabase.auth.signInWithPassword(credentials)

      if (error) {
        return Promise.reject(error)
      }

      return Promise.resolve(data)
    },
  })
}

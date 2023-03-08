import type { SignInSchema } from '@localize/web/features/auth/client'
import { supabase } from '@localize/web/libs/supabase.client'
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

import type { SignUpSchema } from '@localize/web/features/auth/client'
import { supabase } from '@localize/web/libs/supabase.client'
import { useMutation } from '@tanstack/react-query'

export const useSignUp = () => {
  return useMutation({
    mutationFn: async (credentials: SignUpSchema) => {
      const { data, error } = await supabase.auth.signUp(credentials)

      if (error) {
        return Promise.reject(error)
      }

      return Promise.resolve(data)
    },
  })
}

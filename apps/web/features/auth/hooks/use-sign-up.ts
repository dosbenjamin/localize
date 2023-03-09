import type { SignUpSchema } from '@localize/web/features/auth/client'
import { useMutation } from '@tanstack/react-query'
import { useSupabase } from '@localize/web/libs/supabase/client'

export const useSignUp = () => {
  const { supabase } = useSupabase()

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

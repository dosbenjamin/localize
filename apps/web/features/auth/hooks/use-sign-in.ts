import type { SignInSchema } from '@localize/web/features/auth/client'
import { useMutation } from '@tanstack/react-query'
import { useSupabase } from '@localize/web/libs/supabase/client'

export const useSignIn = () => {
  const { supabase } = useSupabase()

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

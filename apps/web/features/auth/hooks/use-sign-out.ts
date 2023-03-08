import { supabase } from '@localize/web/libs/supabase.client'
import { useMutation } from '@tanstack/react-query'

export const useSignOut = () => {
  return useMutation({
    mutationFn: async () => {
      const { error } = await supabase.auth.signOut()

      if (error) {
        return Promise.reject(error)
      }

      return Promise.resolve()
    },
  })
}

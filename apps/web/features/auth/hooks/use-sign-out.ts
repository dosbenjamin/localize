import { useMutation } from '@tanstack/react-query'
import { useSupabase } from '@localize/web/libs/supabase/client'

export const useSignOut = () => {
  const { supabase } = useSupabase()

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

import { useMutation } from '@tanstack/react-query'
import { useSupabase } from '@localize/web/libs/supabase/client'

export const useDeleteProject = () => {
  const { supabase } = useSupabase()

  return useMutation({
    mutationFn: async (id: string) => {
      const { data, error } = await supabase.from('projects').delete().eq('id', id)

      if (error) {
        return Promise.reject(error)
      }

      return Promise.resolve(data)
    },
  })
}

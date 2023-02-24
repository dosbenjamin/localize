import { useMutation } from '@tanstack/react-query'
import { supabase } from 'lib/supabase.client'

export const useDeleteProject = () => {
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

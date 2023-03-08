import type { CreateProjectSchema } from 'features/projects/client'
import { supabase } from 'lib/supabase.client'
import { useMutation } from '@tanstack/react-query'

export const useCreateProject = () => {
  return useMutation({
    mutationFn: async (values: CreateProjectSchema) => {
      const { data, error } = await supabase.rpc('create_project', values)

      if (error) {
        return Promise.reject(error)
      }

      return Promise.resolve(data)
    },
  })
}

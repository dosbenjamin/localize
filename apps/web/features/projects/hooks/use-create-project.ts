import { useMutation } from '@tanstack/react-query'
import { supabase } from 'lib/supabase.client'
import type { CreateProjectSchema } from '../schemas/create-project'

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

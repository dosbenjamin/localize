import type { CreateProjectSchema } from '@localize/web/features/projects/client'
import { supabase } from '@localize/web/libs/supabase.client'
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

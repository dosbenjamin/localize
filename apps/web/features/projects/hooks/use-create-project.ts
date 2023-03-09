import type { CreateProjectSchema } from '@localize/web/features/projects/client'
import { useMutation } from '@tanstack/react-query'
import { useSupabase } from '@localize/web/libs/supabase/client'

export const useCreateProject = () => {
  const { supabase } = useSupabase()

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

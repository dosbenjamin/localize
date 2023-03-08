import { supabase } from '@localize/web/libs/supabase.client'
import { useQuery } from '@tanstack/react-query'

export const useUser = () => {
  return useQuery({
    queryFn: () => supabase.auth.getUser(),
    queryKey: ['user'],
  })
}

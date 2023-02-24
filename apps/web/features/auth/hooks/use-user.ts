import { useQuery } from '@tanstack/react-query'
import { supabase } from 'lib/supabase.client'

export const useUser = () => {
  return useQuery({
    queryFn: () => supabase.auth.getUser(),
    queryKey: ['user'],
  })
}

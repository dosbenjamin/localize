import { useQuery } from '@tanstack/react-query'
import { supabase } from 'lib/supabase.client'

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => supabase.auth.getUser(),
  })
}

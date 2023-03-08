import { supabase } from 'lib/supabase.client'
import { useQuery } from '@tanstack/react-query'

export const useUser = () => {
  return useQuery({
    queryFn: () => supabase.auth.getUser(),
    queryKey: ['user'],
  })
}

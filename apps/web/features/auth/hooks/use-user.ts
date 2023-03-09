import { useQuery } from '@tanstack/react-query'
import { useSupabase } from '@localize/web/libs/supabase/client'

export const useUser = () => {
  const { supabase } = useSupabase()

  return useQuery({
    queryFn: () => supabase.auth.getUser(),
    queryKey: ['user'],
  })
}

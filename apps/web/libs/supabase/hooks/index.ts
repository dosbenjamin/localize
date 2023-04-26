import { SupabaseContext } from '@localize/web/libs/supabase/client'
import { useContext } from 'react'

export const useSupabase = () => {
  const context = useContext(SupabaseContext)

  if (!context) {
    throw new Error('useSupabase must be used within SupabaseContextProvider')
  }

  return context
}

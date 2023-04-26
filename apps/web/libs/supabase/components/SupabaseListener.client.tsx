'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSupabase } from '@localize/web/libs/supabase/client'

type SupabaseListenerProps = {
  accessToken?: string
}

export const SupabaseListener = ({ accessToken }: SupabaseListenerProps) => {
  const router = useRouter()
  const { supabase } = useSupabase()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      if (session?.access_token !== accessToken) {
        router.refresh()
      }
    })

    return () => subscription.unsubscribe()
  }, [accessToken, router, supabase])

  return null
}

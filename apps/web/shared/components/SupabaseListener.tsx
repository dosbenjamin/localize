'use client'

import { supabase } from '@localize/web/libs/supabase.client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

type SupabaseListenerProps = {
  accessToken?: string
}

export const SupabaseListener = ({ accessToken }: SupabaseListenerProps) => {
  const router = useRouter()

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      if (session?.access_token !== accessToken) {
        router.refresh()
      }
    })

    return () => subscription.unsubscribe()
  }, [accessToken, router])

  return null
}

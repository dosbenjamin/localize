'use client'

import { supabase } from 'lib/supabase.client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

type SupabaseListenerProps = {
  accessToken?: string
}

export const SupabaseListener = ({ accessToken }: SupabaseListenerProps) => {
  const router = useRouter()

  useEffect(() => {
    supabase.auth.onAuthStateChange((_, session) => {
      if (session?.access_token !== accessToken) {
        router.refresh()
      }
    })
  }, [accessToken, router])

  return null
}

'use client'

import type { AuthError } from '@supabase/supabase-js'
import { Link } from '@localize/ui'
import { toast } from 'react-hot-toast/headless'
import { useQueryClient } from '@tanstack/react-query'
import { useSignOut } from '@localize/web/features/auth/client'

export const SignOutButton = () => {
  const queryClient = useQueryClient()
  const { mutateAsync: signOut } = useSignOut()

  const handleSignOut = async () => {
    try {
      await toast.promise(signOut(), {
        error: ({ message }: AuthError) => message,
        loading: 'Signing out...',
        success: 'Successfully signed out',
      })
      await queryClient.invalidateQueries()
    } catch {
      toast('😔 Try again!')
    }
  }

  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={handleSignOut}
      as="button"
    >
      Sign Out
    </Link>
  )
}

'use client'

import type { AuthError } from '@supabase/supabase-js'
import { Link } from '@localize/ui'
import { toast } from 'react-hot-toast/headless'
import { useRouter } from 'next/navigation'
import { useSignOut } from '../hooks/use-sign-out'

export const SignOutButton = () => {
  const { mutateAsync: signOut } = useSignOut()

  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await toast.promise(signOut(), {
        error: ({ message }: AuthError) => message,
        loading: 'Signing out...',
        success: 'Successfully signed out',
      })

      router.push('/login')
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

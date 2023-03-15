'use client'

import { Link } from '@localize/ui'
import { toast } from 'react-hot-toast/headless'
import { useQueryClient } from '@tanstack/react-query'
import { useSignOut } from '@localize/web/features/auth/client'

export const SignOutButton = () => {
  const queryClient = useQueryClient()
  const { mutateAsync: signOut } = useSignOut({
    onError: () => toast('😔 Try again!'),
    onSuccess: () => queryClient.invalidateQueries(),
  })

  const handleSignOut = async () => {
    await toast.promise(signOut(), {
      error: (message: string) => message,
      loading: 'Signing out...',
      success: 'Successfully signed out',
    })
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

import type { WrappedUseMutation } from '@localize/web/libs/react-query'
import { signOut } from '@localize/web/features/auth/client'
import { useMutation } from '@tanstack/react-query'

export const useSignOut: WrappedUseMutation<void, string, void> = (options) => useMutation(signOut, options)

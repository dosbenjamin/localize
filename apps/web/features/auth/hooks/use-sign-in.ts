import type { AuthResponse } from '@supabase/supabase-js'
import type { SignInValues } from '@localize/web/features/auth/client'
import type { WrappedUseMutation } from '@localize/web/libs/react-query'
import { signIn } from '@localize/web/features/auth/client'
import { useMutation } from '@tanstack/react-query'

export const useSignIn: WrappedUseMutation<AuthResponse['data'], string, SignInValues> = (options) =>
  useMutation(signIn, options)

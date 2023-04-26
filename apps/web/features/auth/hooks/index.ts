import type { SignInInput, SignUpInput } from '@localize/web/features/auth'
import { signIn, signOut, signUp } from '@localize/web/features/auth/client'
import type { AuthResponse } from '@supabase/supabase-js'
import type { WrappedUseMutation } from '@localize/web/libs/react-query'
import { useMutation } from '@tanstack/react-query'

export const useSignIn: WrappedUseMutation<AuthResponse['data'], string, SignInInput> = (options) =>
  useMutation(signIn, options)

export const useSignOut: WrappedUseMutation<void, string, void> = (options) => useMutation(signOut, options)

export const useSignUp: WrappedUseMutation<AuthResponse['data'], string, SignUpInput> = (options) =>
  useMutation(signUp, options)

import type { AuthResponse } from '@supabase/supabase-js'
import type { SignUpInput } from '@localize/web/features/auth'
import type { WrappedUseMutation } from '@localize/web/libs/react-query'
import { signUp } from '@localize/web/features/auth/client'
import { useMutation } from '@tanstack/react-query'

export const useSignUp: WrappedUseMutation<AuthResponse['data'], string, SignUpInput> = (options) =>
  useMutation(signUp, options)

import { type SignUpValues, signUp } from '@localize/web/features/auth/client'
import type { AuthResponse } from '@supabase/supabase-js'
import type { WrappedUseMutation } from '@localize/web/libs/react-query'
import { useMutation } from '@tanstack/react-query'

export const useSignUp: WrappedUseMutation<AuthResponse['data'], AuthResponse['error'], SignUpValues> = (options) =>
  useMutation(signUp, options)

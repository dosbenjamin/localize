import type { AuthError, UserResponse } from '@supabase/supabase-js'
import { type WrappedUseQuery, queryKeys } from '@localize/web/libs/react-query'
import { getUser } from '@localize/web/features/auth/client'
import { useQuery } from '@tanstack/react-query'

export const useUser: WrappedUseQuery<UserResponse, AuthError> = (options) =>
  useQuery(queryKeys.getUser(), getUser, options)

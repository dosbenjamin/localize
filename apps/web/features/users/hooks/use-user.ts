import { type WrappedUseQuery, queryKeys } from '@localize/web/libs/react-query'
import type { AuthError } from '@supabase/supabase-js'
import type { ReadUserOutput } from '@localize/web/features/users/schemas'
import { getUser } from '@localize/web/features/users/client'
import { useQuery } from '@tanstack/react-query'

export const useUser: WrappedUseQuery<ReadUserOutput, AuthError> = (options) =>
  useQuery(queryKeys.getUser(), getUser, options)

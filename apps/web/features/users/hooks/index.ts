import { type WrappedUseQuery, queryKeys } from '@localize/web/libs/react-query/client'
import type { AuthError } from '@supabase/supabase-js'
import type { ReadUserOutput } from '@localize/web/features/users'
import { getUser } from '@localize/web/features/users/queries/client'
import { useQuery } from '@tanstack/react-query'

export const useUser: WrappedUseQuery<ReadUserOutput, AuthError> = (options) =>
  useQuery(queryKeys.getUser(), getUser, options)
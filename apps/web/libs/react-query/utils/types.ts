import type { UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'

export type WrappedUseMutation<TData = unknown, TError = unknown, TVariables = unknown, TContext = unknown> = (
  options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>,
) => UseMutationResult<TData, TError, TVariables, TContext>

export type WrappedUseQuery<TData = unknown, TError = unknown> = (
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) => UseQueryResult<TData, TError>

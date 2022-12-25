'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from 'lib/query-client'
import type { PropsWithChildren } from 'react'

type QueryClientProps = PropsWithChildren

export const QueryClient = ({ children }: QueryClientProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

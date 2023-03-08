'use client'

import type { PropsWithChildren } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@localize/web/libs/query-client'

type QueryClientProps = PropsWithChildren

export const QueryClient = ({ children }: QueryClientProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

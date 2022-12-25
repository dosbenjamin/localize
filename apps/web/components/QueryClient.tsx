'use client'

import type { PropsWithChildren } from 'react'
import { QueryClient as Client, QueryClientProvider } from 'react-query'

const queryClient = new Client()

type QueryClientProps = PropsWithChildren

export const QueryClient = ({ children }: QueryClientProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

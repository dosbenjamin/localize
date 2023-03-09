'use client'

import type { PropsWithChildren } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@localize/web/libs/react-query'

type QueryClientProps = PropsWithChildren

export const QueryClient = (props: QueryClientProps) => (
  <QueryClientProvider client={queryClient} {...props} />
)

'use client'

import { SupabaseContext, supabase } from '@localize/web/libs/supabase/client'
import type { PropsWithChildren } from 'react'

type SupabaseContextProviderProps = PropsWithChildren

export const SupabaseContextProvider = (props: SupabaseContextProviderProps) => (
  <SupabaseContext.Provider value={{ supabase }} {...props} />
)

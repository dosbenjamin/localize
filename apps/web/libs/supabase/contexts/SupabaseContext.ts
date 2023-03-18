'use client'

import type { Database } from '@localize/web/libs/supabase/client'
import type { SupabaseClient } from '@supabase/supabase-js'
import { createContext } from 'react'

type SupabaseContextValue = {
  supabase: SupabaseClient<Database>
}
export const SupabaseContext = createContext<SupabaseContextValue | null>(null)

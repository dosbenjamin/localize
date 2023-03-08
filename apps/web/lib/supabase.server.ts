import { cookies, headers } from 'next/headers'
import type { Database } from './database.types'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'

export const createClient = () =>
  createServerComponentSupabaseClient<Database>({
    cookies,
    headers,
  })

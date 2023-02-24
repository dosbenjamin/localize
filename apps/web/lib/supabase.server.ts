import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { cookies, headers } from 'next/headers'
import type { Database } from './database.types'

export const createClient = () =>
  createServerComponentSupabaseClient<Database>({
    cookies,
    headers,
  })

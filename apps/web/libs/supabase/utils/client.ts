import type { Database } from '@localize/web/libs/supabase/client'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'

export const supabase = createBrowserSupabaseClient<Database>()

import type { UserResponse } from '@supabase/supabase-js'
import { supabase } from '@localize/web/libs/supabase/client'

export const getUser = (): Promise<UserResponse> => supabase.auth.getUser()

import { ReadProjectSchema, type ReadProjectValues } from '@localize/web/features/projects/server'
import type { Database } from '@localize/web/libs/supabase/client'
import type { SupabaseClient } from '@supabase/supabase-js'

export const readProjects = async (supabase: SupabaseClient<Database>): Promise<ReadProjectValues[]> => {
  const { data } = await supabase.from('projects').select().order('created_at', { ascending: false })
  return ReadProjectSchema.array().parse(data)
}

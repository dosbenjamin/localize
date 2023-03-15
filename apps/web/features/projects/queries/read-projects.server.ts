import { type ReadProjectOutput, ReadProjectOutputSchema } from '@localize/web/features/projects/server'
import type { Database } from '@localize/web/libs/supabase/client'
import type { SupabaseClient } from '@supabase/supabase-js'

export const readProjects = async (supabase: SupabaseClient<Database>): Promise<ReadProjectOutput[]> => {
  const { data } = await supabase
    .from('projects')
    .select('*, dictionaries(*, languages(*))')
    .order('created_at', { ascending: false })

  return ReadProjectOutputSchema.array().parse(data)
}

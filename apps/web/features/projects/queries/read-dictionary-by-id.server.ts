import { type ReadDictionaryOutput, ReadDictionaryOutputSchema } from '@localize/web/features/projects'
import type { Database } from '@localize/web/libs/supabase/client'
import type { SupabaseClient } from '@supabase/supabase-js'
import { z } from 'zod'

export const readDictionaryById = async (
  supabase: SupabaseClient<Database>,
  id: string,
): Promise<ReadDictionaryOutput> => {
  const dictionaryId = z.string().uuid().parse(id)

  const { data: dictionary } = await supabase
    .from('dictionaries')
    .select('*, languages(*)')
    .eq('id', dictionaryId)
    .single()

  return ReadDictionaryOutputSchema.parse(dictionary)
}

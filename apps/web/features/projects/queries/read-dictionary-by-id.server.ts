import { type ReadDictionaryOutput, ReadDictionaryOutputSchema } from '@localize/web/features/projects'
import { createClient } from '@localize/web/libs/supabase/server'
import { z } from 'zod'

export const readDictionaryById = async (id: string): Promise<ReadDictionaryOutput> => {
  const supabase = createClient()

  const dictionaryId = z.string().uuid().parse(id)

  const { data: dictionary } = await supabase
    .from('dictionaries')
    .select('*, languages(*), project: projects(*, dictionaries(*))')
    .eq('id', dictionaryId)
    .single()

  return ReadDictionaryOutputSchema.parse(dictionary)
}

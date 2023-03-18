import { createClient } from '@localize/web/libs/supabase/server'
import { readDictionaryById } from '@localize/web/features/projects/server'

type DictionaryPageParams = {
  dictionaryId: string
  projectId: string
}

type DictionaryPageProps = {
  params: DictionaryPageParams
}

const DictionaryPage = async ({ params }: DictionaryPageProps) => {
  const supabase = createClient()

  const dictionary = await readDictionaryById(supabase, params.dictionaryId)
  console.log(dictionary.id)

  return <div>{params.dictionaryId}</div>
}

export default DictionaryPage

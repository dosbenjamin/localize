import 'server-only'
import { Heading } from '@localize/ui'
import Link from 'next/link'
import { readDictionaryById } from '@localize/web/features/projects/server'

type DictionaryPageParams = {
  dictionaryId: string
  projectId: string
}

type DictionaryPageProps = {
  params: DictionaryPageParams
}

const DictionaryPage = async ({ params: { dictionaryId } }: DictionaryPageProps) => {
  const dictionary = await readDictionaryById(dictionaryId)

  return (
    <>
      <header className="border-purple-360 sticky top-0 border-b p-8">
        <Link href="/projects/">Back</Link>
        <Heading size="large">{dictionary.name}</Heading>
      </header>
      <div className="h-screen" />
    </>
  )
}

export default DictionaryPage

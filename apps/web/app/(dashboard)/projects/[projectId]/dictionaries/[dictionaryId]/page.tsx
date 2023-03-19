import 'server-only'
import { Heading } from '@localize/ui'
import Link from 'next/link'
import { readDictionaryById } from '@localize/web/features/projects/server'
import { readProjectById } from '@localize/web/features/projects/queries/read-project-by-id.server'

type DictionaryPageParams = {
  dictionaryId: string
  projectId: string
}

type DictionaryPageProps = {
  params: DictionaryPageParams
}

const DictionaryPage = async ({ params: { dictionaryId, projectId } }: DictionaryPageProps) => {
  const [project, dictionary] = await Promise.all([readProjectById(projectId), readDictionaryById(dictionaryId)])

  return (
    <>
      <header className="border-purple-360 sticky top-0 border-b p-8">
        <Link href={`/projects/${project.id}`}>Back to {project.title}</Link>
        <Heading size="large">{dictionary.name}</Heading>
      </header>
      <div className="h-screen" />
    </>
  )
}

export default DictionaryPage

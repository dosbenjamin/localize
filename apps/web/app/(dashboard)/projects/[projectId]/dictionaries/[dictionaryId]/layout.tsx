import 'server-only'
import { Heading } from '@localize/ui'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'
import { readDictionaryById } from '@localize/web/features/dictionaries/server'
import { readProjectById } from '@localize/web/features/projects/server'

type DictionaryLayoutParams = {
  dictionaryId: string
  projectId: string
}

type DictionaryLayoutProps = PropsWithChildren<{
  params: DictionaryLayoutParams
}>

const DictionaryLayout = async ({ params: { dictionaryId, projectId }, children }: DictionaryLayoutProps) => {
  const [project, dictionary] = await Promise.all([readProjectById(projectId), readDictionaryById(dictionaryId)])

  return (
    <>
      <header className="border-purple-360 sticky top-0 border-b p-8">
        <Link href={`/projects/${project.id}`}>Back to {project.title}</Link>
        <Heading size="large">{dictionary.name}</Heading>
      </header>
      <section className="p-8">
        <nav className="space-x-4">
          {dictionary.languages.map(({ id, name }) => (
            <Link key={id} href={`/projects/${project.id}/dictionaries/${dictionary.id}/translations/${id}`}>
              {name}
            </Link>
          ))}
        </nav>
        {children}
      </section>
    </>
  )
}

export default DictionaryLayout

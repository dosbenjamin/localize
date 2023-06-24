import { Button, Dialog, Heading, Icon } from '@localize/ui'
import { type DictionaryLayoutParams, DictionaryLayoutParamsSchema } from '@localize/web/features/dictionaries'
import { CreateKeyForm } from '@localize/web/features/keys/client'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'
import { readDictionaryById } from '@localize/web/features/dictionaries/server'
import { readProjectById } from '@localize/web/features/projects/server'

type DictionaryLayoutProps = PropsWithChildren<{
  params: DictionaryLayoutParams
}>

const DictionaryLayout = async ({ params, children }: DictionaryLayoutProps) => {
  const { dictionaryId, projectId } = DictionaryLayoutParamsSchema.parse(params)
  const [project, dictionary] = await Promise.all([readProjectById(projectId), readDictionaryById(dictionaryId)])

  return (
    <>
      <header className="border-purple-360 sticky top-0 border-b p-8">
        <Link href={`/projects/${project.id}`}>Back to {project.title}</Link>
        <Heading size="large">{dictionary.name}</Heading>
      </header>
      <section>
        <header className="border-purple-360 flex items-center justify-between border-b p-8">
          <Heading size="medium">Translations</Heading>
          <div>
            <Dialog.Container
              trigger={
                <Button intent="secondary" size="unstyled" className="grid h-4 w-4 place-content-center p-4">
                  <Icon.Cross className="h-4 w-4" />
                </Button>
              }
            >
              <Dialog.Title>Add translation key</Dialog.Title>
              <CreateKeyForm dictionaryId={dictionaryId} projectId={projectId} />
            </Dialog.Container>
          </div>
        </header>
        <nav className="space-x-4">
          {dictionary.languages.map(({ id, name }) => (
            <Link key={id} href={`/projects/${project.id}/dictionaries/${dictionary.id}/languages/${id}`}>
              {name}
            </Link>
          ))}
        </nav>
        <div className="p-8">{children}</div>
      </section>
    </>
  )
}

export default DictionaryLayout

import { AlertDialog, Link as CustomLink, Dialog, Dropdown, Heading, Icon } from '@localize/ui'
import { CreateDictionaryForm, CreateProjectForm, DeleteProjectButton } from '@localize/web/features/projects/client'
import Link from 'next/link'
import { createClient } from '@localize/web/libs/supabase/server'
import { readProjects } from '@localize/web/features/projects/server'

const Dashboard = async () => {
  const supabase = createClient()
  const projects = await readProjects(supabase)

  return (
    <div className="space-y-8 p-8">
      <Heading size="large">Projects</Heading>
      <Dialog.Container
        trigger={
          <button className="bg-purple-720 grid h-48 w-full place-content-center p-8 outline-none">
            <CustomLink as="span">New project</CustomLink>
          </button>
        }
      >
        <Dialog.Title>New project</Dialog.Title>
        <CreateProjectForm />
      </Dialog.Container>
      {projects.map(({ id: projectId, title, dictionaries }) => (
        <article key={projectId} className="bg-purple-720">
          <header className="border-purple-360 flex items-center justify-between border-b p-8">
            <Heading size="large">
              <Link href={`/dashboard/projects/${projectId}`}>{title}</Link>
            </Heading>
            <Dropdown.Container
              trigger={
                <button className="outline-none" aria-label={`${title} project settings`}>
                  <Icon.Gear className="h-6 w-6 transform-gpu opacity-50 transition-all hover:rotate-90 hover:opacity-100" />
                </button>
              }
            >
              <Dropdown.Item asChild>
                <Dialog.Container trigger={<CustomLink as="button">Create a dictionary</CustomLink>}>
                  <Dialog.Title>Create a dictionary</Dialog.Title>
                  <CreateDictionaryForm projectId={projectId} />
                </Dialog.Container>
              </Dropdown.Item>
              <Dropdown.Item asChild>
                <CustomLink as="button" disabled>
                  Invite team member
                </CustomLink>
              </Dropdown.Item>
              <Dropdown.Separator />
              <Dropdown.Item asChild>
                <CustomLink as="button" disabled>
                  Settings
                </CustomLink>
              </Dropdown.Item>
              <Dropdown.Separator />
              <Dropdown.Item asChild>
                <AlertDialog.Container
                  trigger={
                    <CustomLink as="button" color="danger">
                      Delete
                    </CustomLink>
                  }
                >
                  <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
                  <AlertDialog.Description>
                    This action cannot be undone. This will permanently delete{' '}
                    <strong className="variation-wght-600">{title}</strong> project.
                  </AlertDialog.Description>
                  <div className="flex justify-end space-x-4">
                    <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                    <DeleteProjectButton projectId={projectId} />
                  </div>
                </AlertDialog.Container>
              </Dropdown.Item>
            </Dropdown.Container>
          </header>
          <div className="flex-1 p-8">
            <div className="flex space-x-4">
              {dictionaries.flatMap(({ id: dictionaryId, name, languages }, index) =>
                index < 4
                  ? [
                      <article className="aspect-square flex-1 text-center" key={dictionaryId}>
                        <Link
                          className="bg-purple-540 relative grid h-full place-content-center p-6"
                          href={`/dashboard/projects/${projectId}/dictionaries/${dictionaryId}`}
                        >
                          <Heading as="h3" size="medium">
                            {name}
                          </Heading>
                          <p className="absolute top-4 left-4">{languages.length} language(s)</p>
                        </Link>
                      </article>,
                    ]
                  : [],
              )}
              {Array.from({ length: 4 - dictionaries.length }, (_, index) => (
                <div className="bg-purple-540 aspect-square flex-1" key={index} />
              ))}
              <Dialog.Container
                trigger={
                  <button
                    className="bg-purple-540 grid aspect-square flex-1 place-content-center"
                    aria-label="Create a dictionary"
                  >
                    <Icon.Cross className="fill-purple-180 h-10 w-10" />
                  </button>
                }
              >
                <Dialog.Title>Create a dictionary</Dialog.Title>
                <CreateDictionaryForm projectId={projectId} />
              </Dialog.Container>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Dashboard

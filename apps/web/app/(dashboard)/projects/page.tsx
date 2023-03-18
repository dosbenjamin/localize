import { AlertDialog, Button, Link as CustomLink, Dialog, Dropdown, Heading, Icon } from '@localize/ui'
import { CreateDictionaryForm, CreateProjectForm, DeleteProjectButton } from '@localize/web/features/projects/client'
import Link from 'next/link'
import { readProjects } from '@localize/web/features/projects/server'

const ProjectsPage = async () => {
  const projects = await readProjects()

  return (
    <div className="space-y-8 p-8">
      <Heading size="large">Projects</Heading>
      <Dialog.Container
        trigger={
          <Button intent="tertiary" className="grid aspect-square h-48 w-full place-content-center" variant="card">
            <CustomLink as="span">New project</CustomLink>
          </Button>
        }
      >
        <Dialog.Title>New project</Dialog.Title>
        <CreateProjectForm />
      </Dialog.Container>
      {projects.map(({ id: projectId, title, dictionaries }) => (
        <article key={projectId} className="bg-purple-720">
          <header className="border-purple-360 flex items-center justify-between border-b p-8">
            <Heading size="large">
              <Link href={`/projects/${projectId}`}>{title}</Link>
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
              {dictionaries.map(({ id: dictionaryId, name, languages }, index) =>
                index < 4 ? (
                  <Button
                    key={dictionaryId}
                    as="article"
                    intent="tertiary"
                    size="unstyled"
                    variant="card"
                    className="flex-1"
                  >
                    <Link
                      className="flex aspect-square h-full flex-col items-start p-4"
                      href={`/projects/${projectId}/dictionaries/${dictionaryId}`}
                    >
                      <Heading as="h3" size="medium" className="mt-auto">
                        {name}
                      </Heading>
                      <p className="order-first">{languages.length} language(s)</p>
                    </Link>
                  </Button>
                ) : null,
              )}
              {Array.from({ length: 4 - dictionaries.length }, (_, index) => (
                <div className="bg-purple-540 aspect-square flex-1" key={index} />
              ))}
              <Dialog.Container
                trigger={
                  <Button
                    intent="tertiary"
                    className="grid aspect-square flex-1 place-content-center"
                    aria-label="Create a dictionary"
                    size="unstyled"
                    variant="card"
                  >
                    <Icon.Cross className="h-10 w-10" />
                  </Button>
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

export default ProjectsPage

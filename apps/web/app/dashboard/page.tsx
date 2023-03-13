import { AlertDialog, CrossButton, Link as CustomLink, Dialog, Dropdown, Heading, Icon } from '@localize/ui'
import {
  CreateDictionaryForm,
  CreateMemberInvitationForm,
  CreateProjectForm,
  DeleteProjectButton,
} from '@localize/web/features/projects/client'
import { ProjectFolder, readProjects } from '@localize/web/features/projects/server'
import Link from 'next/link'
import { createClient } from '@localize/web/libs/supabase/server'

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
      {projects.map(({ id, title }) => (
        <article key={id} className="bg-purple-720">
          <header className="border-purple-360 flex items-center justify-between border-b p-8">
            <Heading size="large">
              <Link href={`/dashboard/projects/${id}`}>{title}</Link>
            </Heading>
            <Dropdown.Container
              trigger={
                <button className="outline-none" aria-label={`${title} project settings`}>
                  <Icon.Gear className="h-6 w-6 transform-gpu opacity-50 transition-all hover:rotate-90 hover:opacity-100" />
                </button>
              }
            >
              <Dropdown.Item asChild>
                <CustomLink as="button" disabled>
                  Create dictionary
                </CustomLink>
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
                  <div className="grid grid-cols-2 gap-4">
                    <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                    <DeleteProjectButton projectId={id} />
                  </div>
                </AlertDialog.Container>
              </Dropdown.Item>
            </Dropdown.Container>
          </header>
          <div className="divide-purple-360 flex divide-x">
            <ProjectFolder
              header={
                <>
                  <Heading size="medium">Dictionaries</Heading>
                  <CustomLink as={Link} href="#">
                    See all
                  </CustomLink>
                </>
              }
            >
              <div className="flex space-x-4">
                {Array.from({ length: 2 }, (_, index) => (
                  <div className="bg-purple-540 aspect-square flex-1" key={index} />
                ))}
                <Dialog.Container
                  trigger={
                    <button
                      className="bg-purple-540 grid aspect-square flex-1 place-content-center"
                      aria-label="Add a team member"
                    >
                      <Icon.Cross className="fill-purple-180 h-10 w-10" />
                    </button>
                  }
                >
                  <Dialog.Title>Create a dictionary</Dialog.Title>
                  <CreateDictionaryForm projectId={id} />
                </Dialog.Container>
              </div>
            </ProjectFolder>
            <ProjectFolder
              header={
                <>
                  <Heading size="medium">Team</Heading>
                  <CustomLink as={Link} href="#">
                    See all
                  </CustomLink>
                </>
              }
            >
              <div className="grid grid-cols-6 gap-4">
                {Array.from({ length: 8 }, (_, index) => (
                  <div className="bg-purple-540 aspect-square" key={index} />
                ))}
                <Dialog.Container trigger={<CrossButton className="col-start-5 col-end-7 row-start-1 row-end-3" />}>
                  <Dialog.Title>Invite a member</Dialog.Title>
                  <CreateMemberInvitationForm projectId={id} />
                </Dialog.Container>
              </div>
            </ProjectFolder>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Dashboard

import { CreateProjectForm, DeleteProjectButton, InviteMemberForm } from '@localize/web/features/projects/client'
import { CrossButton, Link as CustomLink, Dialog, Heading, Icon } from '@localize/ui'
import Link from 'next/link'
import { ProjectFolder } from '@localize/web/features/projects/server'
import { createClient } from '@localize/web/libs/supabase/server'

const Dashboard = async () => {
  const supabase = createClient()

  const { data: projects } = await supabase.from('projects').select().order('created_at', { ascending: false })

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
      {projects?.map(({ id, name }) => (
        <article key={id} className="bg-purple-720">
          <header className="border-purple-360 flex items-center justify-between border-b p-8">
            <Heading size="large">
              <Link href={`/dashboard/projects/${id}`}>{name}</Link>
            </Heading>
            <Dialog.Container trigger={<button>Delete</button>}>
              <Dialog.Title>Are you absolutely sure?</Dialog.Title>
              <Dialog.Description className="max-w-md">
                This action cannot be undone. This will permanently delete
                <strong className="variation-wght-600">{name}</strong> project.
              </Dialog.Description>
              <div className="flex space-x-4">
                <DeleteProjectButton projectId={id} />
              </div>
            </Dialog.Container>
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
                <button
                  className="bg-purple-540 grid aspect-square flex-1 place-content-center"
                  aria-label="Add a team member"
                >
                  <Icon.Cross className="fill-purple-180 h-10 w-10" />
                </button>
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
                  <InviteMemberForm projectId={id} />
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

import { CrossButton, Dialog, Heading, Icon, Link as CustomLink } from '@localize/ui'
import { ProjectFolder } from 'features/projects/server'
import { CreateProjectForm, InviteMemberForm } from 'features/projects/client'
import { createClient } from 'lib/supabase.server'
import Link from 'next/link'

const Dashboard = async () => {
  const supabase = createClient()

  const { data: projects } = await supabase.from('projects').select().order('created_at', { ascending: false })

  return (
    <div className="space-y-8 p-8">
      <Heading size="large">Projects</Heading>
      <Dialog.Composed
        trigger={
          <button className="bg-purple-720 grid h-48 w-full place-content-center p-8 outline-none">
            <CustomLink as="span">New project</CustomLink>
          </button>
        }
      >
        <Heading size="large">New project</Heading>
        <CreateProjectForm />
      </Dialog.Composed>
      {projects?.map(({ id, name }) => (
        <article key={id} className="bg-purple-720">
          <header className="border-purple-360 flex items-center justify-between border-b p-8">
            <Heading size="large">
              <Link href={`/dashboard/projects/${id}`}>{name}</Link>
            </Heading>
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
                <Dialog.Composed trigger={<CrossButton className="col-start-5 col-end-7 row-start-1 row-end-3" />}>
                  <Heading size="large">Invite a member</Heading>
                  <InviteMemberForm projectId={id} />
                </Dialog.Composed>
              </div>
            </ProjectFolder>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Dashboard

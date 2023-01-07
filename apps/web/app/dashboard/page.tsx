import { Heading, Link as CustomLink } from '@localize/ui'
import { ProjectFolder } from 'features/projects/server'
import { CreateProjectDialog } from 'features/projects/client'
import { createClient } from 'lib/supabase.server'
import Link from 'next/link'

const Dashboard = async () => {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: projects } = await supabase
    .from('projects')
    .select(
      `
      id,
      name
    `,
    )
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-8 p-8">
      <Heading size="medium">Projects</Heading>
      <CreateProjectDialog userId={user?.id}>
        <Heading size="large">New project</Heading>
      </CreateProjectDialog>
      {projects?.map(({ id, name }) => (
        <article key={id} className="bg-purple-720">
          <div className="border-purple-360 flex items-center justify-between border-b p-8">
            <Heading size="large">
              <Link href={`/dashboard/projects/${id}`}>{name}</Link>
            </Heading>
          </div>
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
                <div className="bg-purple-540 aspect-square flex-1"></div>
                <div className="bg-purple-540 aspect-square flex-1"></div>
                <div className="bg-purple-540 aspect-square flex-1"></div>
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
                <div className="bg-purple-540 aspect-square"></div>
                <div className="bg-purple-540 aspect-square"></div>
                <div className="bg-purple-540 aspect-square"></div>
                <div className="bg-purple-540 aspect-square"></div>
                <div className="bg-purple-540 aspect-square"></div>
                <div className="bg-purple-540 aspect-square"></div>
                <div className="bg-purple-540 aspect-square"></div>
                <div className="bg-purple-540 aspect-square"></div>
                <div className="bg-purple-540 col-start-5 col-end-7 row-start-1 row-end-3 aspect-square"></div>
              </div>
            </ProjectFolder>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Dashboard

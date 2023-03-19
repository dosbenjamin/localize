import Link from 'next/link'
import type { PropsWithChildren } from 'react'
import { readProjectById } from '@localize/web/features/projects/queries/read-project-by-id.server'

type ProjectPageParams = {
  projectId: string
}

type ProjectPageProps = PropsWithChildren<{
  params: ProjectPageParams
}>

const ProjectPage = async ({ params: { projectId }, children }: ProjectPageProps) => {
  const project = await readProjectById(projectId)

  return (
    <>
      <Link href="/projects?no-cache=true">Back to projects</Link>
      <ul>
        {project.dictionaries.map(({ id: dictionaryId, name }) => (
          <li key={dictionaryId}>
            <Link href={`/projects/${project.id}/dictionaries/${dictionaryId}`}>{name}</Link>
          </li>
        ))}
      </ul>
      {children}
    </>
  )
}

export default ProjectPage

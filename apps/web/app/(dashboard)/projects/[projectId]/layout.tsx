import { ProjectContextProvider } from '@localize/web/features/projects/client'
import type { PropsWithChildren } from 'react'
import { readProjectById } from '@localize/web/features/projects/queries/read-project-by-id.server'

type ProjectLayoutParams = {
  projectId: string
}

type ProjectLayoutProps = PropsWithChildren<{
  params: ProjectLayoutParams
}>

const ProjectLayout = async ({ params: { projectId }, ...props }: ProjectLayoutProps) => {
  const project = await readProjectById(projectId)

  return <ProjectContextProvider project={project} {...props} />
}

export default ProjectLayout

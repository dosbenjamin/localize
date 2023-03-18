'use client'

import { ProjectContext } from '@localize/web/features/projects/client'
import type { PropsWithChildren } from 'react'
import type { ReadProjectOutput } from '@localize/web/features/projects'

type ProjectContextProviderProps = PropsWithChildren<{
  project: ReadProjectOutput
}>

export const ProjectContextProvider = ({ project, ...props }: ProjectContextProviderProps) => (
  <ProjectContext.Provider value={project} {...props} />
)

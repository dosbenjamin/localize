import type { ReadProjectOutput } from '@localize/web/features/projects'
import { createContext } from 'react'

type ProjectsContextValue = {
  projects: ReadProjectOutput[]
}

export const ProjectsContext = createContext<ProjectsContextValue | null>(null)

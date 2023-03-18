import type { ReadProjectOutput } from '@localize/web/features/projects'
import { createContext } from 'react'

export type ProjectContextValue = ReadProjectOutput
export const ProjectContext = createContext<ProjectContextValue | null>(null)

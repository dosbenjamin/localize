import { ProjectContext, type ProjectContextValue } from '@localize/web/features/projects/client'
import { useContext } from 'react'

export const useProject = (): ProjectContextValue => {
  const context = useContext(ProjectContext)

  if (!context) {
    throw new Error('useProject must be used within ProjectContextProvider')
  }

  return context
}

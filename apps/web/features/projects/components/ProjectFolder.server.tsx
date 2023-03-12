import type { PropsWithChildren, ReactNode } from 'react'

type ProjectFolderProps = PropsWithChildren<{
  header: ReactNode
}>

export const ProjectFolder = ({ header, children }: ProjectFolderProps) => (
  <div className="flex-1 space-y-8 p-8">
    <div className="flex items-center justify-between">{header}</div>
    {children}
  </div>
)

import type { PropsWithChildren } from 'react'

type GroupProps = PropsWithChildren

export const Group = (props: GroupProps) => <div className="flex flex-col space-y-2" {...props} />

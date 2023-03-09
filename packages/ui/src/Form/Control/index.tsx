import type { ComponentPropsWithRef } from 'react'

type ControlProps = ComponentPropsWithRef<'div'>

export const Control = (props: ControlProps) => <div className="space-y-2" {...props} />

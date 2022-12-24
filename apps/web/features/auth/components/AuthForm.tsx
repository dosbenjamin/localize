'use client'

import { Stack } from '@localize/ui'
import type { FormEventHandler, PropsWithChildren, ReactNode } from 'react'

type AuthFormProps = PropsWithChildren<{
  top: ReactNode
  bottom: ReactNode
  onSubmit: FormEventHandler<HTMLFormElement>
}>

export const AuthForm = ({ top, children, bottom, onSubmit }: AuthFormProps) => (
  <form className="flex flex-col space-y-8 p-12" onSubmit={onSubmit}>
    {top}
    <Stack.Vertical spacing="4">{children}</Stack.Vertical>
    {bottom}
  </form>
)

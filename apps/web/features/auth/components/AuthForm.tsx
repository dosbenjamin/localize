'use client'

import { Stack } from '@localize/ui'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type AuthFormProps = ComponentPropsWithoutRef<'form'> & {
  top: ReactNode
  bottom: ReactNode
}

export const AuthForm = ({ top, children, bottom, ...props }: AuthFormProps) => (
  <form className="flex flex-col space-y-8 p-12" {...props}>
    {top}
    <Stack.Vertical spacing="4">{children}</Stack.Vertical>
    {bottom}
  </form>
)

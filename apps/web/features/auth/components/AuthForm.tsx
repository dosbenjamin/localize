'use client'

import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type AuthFormProps = ComponentPropsWithoutRef<'form'> & {
  top: ReactNode
  bottom: ReactNode
}

export const AuthForm = ({ top, children, bottom, ...props }: AuthFormProps) => (
  <form className="flex flex-col space-y-8 p-12" {...props}>
    {top}
    <div className="space-y-4">{children}</div>
    {bottom}
  </form>
)

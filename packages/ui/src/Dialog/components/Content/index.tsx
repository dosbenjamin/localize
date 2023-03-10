'use client'

import * as Dialog from '@radix-ui/react-dialog'
import type { PropsWithChildren } from 'react'
import { cx } from 'class-variance-authority'

type ContentProps = PropsWithChildren<{
  className?: string
}>

export const Content = ({ className, ...props }: ContentProps) => (
  <Dialog.Content
    className={cx('border-purple-360 min-w-md z-10 space-y-8 border bg-purple-900 p-12', className)}
    {...props}
  />
)

'use client'

import type { PropsWithChildren } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { cx } from 'class-variance-authority'

export type ContentProps = PropsWithChildren<{
  className?: string
}>

export const Content = ({ className, ...props }: ContentProps) => (
  <Dialog.Content className={cx('border-purple-360 z-10 max-w-md border bg-purple-900 p-12', className)} {...props} />
)

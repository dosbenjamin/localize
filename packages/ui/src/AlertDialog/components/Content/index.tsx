'use client'

import * as AlertDialog from '@radix-ui/react-alert-dialog'
import type { PropsWithChildren } from 'react'
import { cx } from 'class-variance-authority'

type ContentProps = PropsWithChildren<{
  className?: string
}>

export const Content = ({ className, ...props }: ContentProps) => (
  <AlertDialog.Content
    className={cx('border-purple-360 min-w-md z-10 space-y-8 border bg-purple-900 p-12', className)}
    {...props}
  />
)

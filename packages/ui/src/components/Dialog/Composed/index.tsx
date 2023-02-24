'use client'

import { type PropsWithChildren, type ReactNode, useState } from 'react'
import * as Dialog from '..'

export type ComposedProps = PropsWithChildren<{
  trigger?: ReactNode
}>

export const Composed = ({ trigger, children }: ComposedProps) => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const toggleDialog = () => setDialogOpen((dialogOpen) => !dialogOpen)

  return (
    <Dialog.Root open={dialogOpen} onOpenChange={toggleDialog}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.ContextProvider value={{ toggleDialog }}>
          <Dialog.Content>{children}</Dialog.Content>
        </Dialog.ContextProvider>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

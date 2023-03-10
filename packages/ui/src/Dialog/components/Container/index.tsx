'use client'

import * as Dialog from '../..'
import { type PropsWithChildren, type ReactNode } from 'react'
import { useState } from 'react'

type ContainerProps = PropsWithChildren<{
  trigger?: ReactNode
}>

export const Container = ({ trigger, children }: ContainerProps) => {
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

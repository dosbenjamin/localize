'use client'

import * as AlertDialog from '../..'
import { type PropsWithChildren, type ReactNode } from 'react'
import { useState } from 'react'

type ContainerProps = PropsWithChildren<{
  trigger: ReactNode
}>

export const Container = ({ trigger, children }: ContainerProps) => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const toggleDialog = () => setDialogOpen((dialogOpen) => !dialogOpen)

  return (
    <AlertDialog.Root open={dialogOpen} onOpenChange={toggleDialog}>
      <AlertDialog.Trigger asChild>{trigger}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.ContextProvider value={{ toggleDialog }}>
          <AlertDialog.Content>{children}</AlertDialog.Content>
        </AlertDialog.ContextProvider>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

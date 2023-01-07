import type { Meta } from '@storybook/react'
import * as Dialog from '..'

const config: Meta<typeof Dialog.Content> = {
  component: Dialog.Content,
  title: 'Components/Dialog',
}

export default config

export const Default = () => (
  <Dialog.Root>
    <Dialog.Trigger>Dialog trigger</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content>Dialog</Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)

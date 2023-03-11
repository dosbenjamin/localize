import * as Dialog from '../..'
import { Button } from '../../../Button'
import type { Meta } from '@storybook/react'

const config: Meta<typeof Dialog.Container> = {
  component: Dialog.Container,
  title: 'Components/Dialog',
}

export default config

export const Default = () => (
  <Dialog.Container trigger={<Button>Dialog trigger</Button>}>
    <Dialog.Title>Dialog Title</Dialog.Title>
    <Dialog.Description>Dialog Description</Dialog.Description>
  </Dialog.Container>
)

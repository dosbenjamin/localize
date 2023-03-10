import * as Dialog from '../..'
import type { Meta } from '@storybook/react'

const config: Meta<typeof Dialog.Container> = {
  component: Dialog.Container,
  title: 'Components/Dialog',
}

export default config

export const Default = () => <Dialog.Container trigger="Dialog trigger">Dialog</Dialog.Container>

import * as Dialog from '..'
import type { Meta } from '@storybook/react'

const config: Meta<typeof Dialog.Composed> = {
  component: Dialog.Composed,
  title: 'Components/Dialog',
}

export default config

export const Default = () => <Dialog.Composed trigger="Dialog trigger">Dialog</Dialog.Composed>

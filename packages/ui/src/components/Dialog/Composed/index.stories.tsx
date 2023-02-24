import type { Meta } from '@storybook/react'
import * as Dialog from '..'

const config: Meta<typeof Dialog.Composed> = {
  component: Dialog.Composed,
  title: 'Components/Dialog',
}

export default config

export const Default = () => <Dialog.Composed trigger="Dialog trigger">Dialog</Dialog.Composed>

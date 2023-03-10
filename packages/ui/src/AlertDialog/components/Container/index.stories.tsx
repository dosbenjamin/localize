import * as AlertDialog from '../..'
import type { Meta } from '@storybook/react'

const config: Meta<typeof AlertDialog.Container> = {
  component: AlertDialog.Container,
  title: 'Components/AlertDialog',
}

export default config

export const Default = () => <AlertDialog.Container trigger="Dialog trigger">Dialog</AlertDialog.Container>

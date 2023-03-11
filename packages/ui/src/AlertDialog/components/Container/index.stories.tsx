import * as AlertDialog from '../..'
import { Button } from '../../../Button'
import type { Meta } from '@storybook/react'

const config: Meta<typeof AlertDialog.Container> = {
  component: AlertDialog.Container,
  title: 'Components/AlertDialog',
}

export default config

export const Default = () => <AlertDialog.Container trigger={<Button>Alert Dialog Trigger</Button>}>
  <AlertDialog.Title>Alert Dialog Title</AlertDialog.Title>
  <AlertDialog.Description>Alert Dialog Description</AlertDialog.Description>
  <AlertDialog.Cancel>Alert Dialog Cancel</AlertDialog.Cancel>
</AlertDialog.Container>

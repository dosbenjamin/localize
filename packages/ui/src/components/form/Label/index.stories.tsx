import type { Meta } from '@storybook/react'
import { Label } from '.'

const config: Meta<typeof Label> = {
  title: 'Components/Form/Label',
  component: Label,
}

export default config

export const Default = () => <Label>Label</Label>

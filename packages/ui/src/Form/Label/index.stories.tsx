import { Label } from '.'
import type { Meta } from '@storybook/react'

const config: Meta<typeof Label> = {
  component: Label,
  title: 'Components/Form/Label',
}

export default config

export const Default = () => <Label>Label</Label>

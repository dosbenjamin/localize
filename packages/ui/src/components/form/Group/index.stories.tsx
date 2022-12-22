import type { Meta } from '@storybook/react'
import { Group } from '.'
import { Input } from '../Input'
import { Label } from '../Label'

const meta: Meta<typeof Group> = {
  title: 'Components/Form/Group',
  component: Group,
}

export default meta

export const Default = () => (
  <Group>
    <Label>Label</Label>
    <Input placeholder="Input" />
  </Group>
)

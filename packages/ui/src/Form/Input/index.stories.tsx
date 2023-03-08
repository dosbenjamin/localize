import { Input } from '.'
import type { Meta } from '@storybook/react'

const config: Meta<typeof Input> = {
  component: Input,
  title: 'Components/Form/Input',
}

export default config

export const Default = () => <Input placeholder="Input" />
export const Error = () => <Input errorMessage="Error message" placeholder="Input" />

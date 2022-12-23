import type { Meta } from '@storybook/react'
import { Input } from '.'

const config: Meta<typeof Input> = {
  title: 'Components/Form/Input',
  component: Input,
}

export default config

export const Default = () => <Input placeholder="Input" />
export const Error = () => <Input errorMessage="Error message" placeholder="Input" />

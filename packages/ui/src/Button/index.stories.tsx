import type { Meta } from '@storybook/react'
import { Button, type ButtonProps } from '.'

const config: Meta<typeof Button> = {
  argTypes: {
    intent: {
      control: { type: 'select' },
      options: ['danger', 'primary'],
    },
  },
  component: Button,
  title: 'Components/Button',
}

export default config

export const Default = (args: ButtonProps) => <Button {...args}>Button</Button>

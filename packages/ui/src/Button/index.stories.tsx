import { Button } from '.'
import type { ComponentPropsWithoutRef } from 'react'
import type { Meta } from '@storybook/react'

type ButtonProps = ComponentPropsWithoutRef<typeof Button>

const config: Meta<typeof Button> = {
  argTypes: {
    intent: {
      control: { type: 'select' },
      options: ['danger', 'primary', 'neutral'],
    },
  },
  component: Button,
  title: 'Components/Button',
}

export default config

export const Default = (args: ButtonProps) => <Button {...args}>Button</Button>

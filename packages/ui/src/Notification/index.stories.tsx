import type { Meta } from '@storybook/react'
import type { ComponentPropsWithoutRef } from 'react'
import { Notification } from '.'

type NotificationProps = ComponentPropsWithoutRef<typeof Notification>

const config: Meta<typeof Notification> = {
  argTypes: {
    intent: {
      control: { type: 'select' },
      options: ['blank', 'error', 'success', 'loading'],
    },
  },
  component: Notification,
  title: 'Components/Notification',
}

export default config

export const Default = (args: NotificationProps) => <Notification {...args}>Notification</Notification>

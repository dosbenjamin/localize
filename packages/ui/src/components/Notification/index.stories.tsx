import type { Meta } from '@storybook/react'
import { Notification, type NotificationProps } from '.'

const config: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {
    intent: {
      options: ['blank', 'error', 'success', 'loading'],
      control: { type: 'select' },
    },
  },
}

export default config

export const Default = (args: NotificationProps) => <Notification {...args}>Notification</Notification>

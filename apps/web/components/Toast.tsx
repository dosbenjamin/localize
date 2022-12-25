import { Notification, type NotificationProps } from '@localize/ui'
import type { FunctionComponent } from 'react'
import type { ToastType } from 'react-hot-toast/headless'

const toasts: Record<ToastType, FunctionComponent<NotificationProps>> = {
  blank: (props) => <Notification {...props} />,
  custom: ({ children }) => <>{children}</>,
  error: (props) => <Notification intent="error" {...props} />,
  loading: (props) => <Notification intent="loading" {...props} />,
  success: (props) => <Notification intent="success" {...props} />,
}

type ToastProps = NotificationProps & {
  type: ToastType
}

export const Toast = ({ type, ...props }: ToastProps) => toasts[type](props)

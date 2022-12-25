import { Notification, type NotificationProps } from '@localize/ui'
import type { ToastType } from 'react-hot-toast/headless'

const toasts: Record<ToastType, (props: NotificationProps) => JSX.Element> = {
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

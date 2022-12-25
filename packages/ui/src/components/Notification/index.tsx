import { cva, type VariantProps } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'
import { Spinner } from '../icons'

const notificationVariants = cva('border border-purple-720 uppercase p-4 w-80 variation-wght-600', {
  variants: {
    intent: {
      blank: 'bg-purple-900 text-white',
      error: 'bg-danger text-white',
      loading: 'bg-purple-900 text-white',
      success: 'bg-success text-purple-900',
    },
  },
  compoundVariants: [
    {
      intent: 'loading',
      className: 'flex items-center',
    },
  ],
  defaultVariants: {
    intent: 'blank',
  },
})

export type NotificationProps = PropsWithChildren<VariantProps<typeof notificationVariants>>

export const Notification = ({ children, intent, ...props }: NotificationProps) => (
  <div className={notificationVariants({ intent })} {...props}>
    {intent === 'loading' && <Spinner className="mr-4 w-4" />}
    {children}
  </div>
)

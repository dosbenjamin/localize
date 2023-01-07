import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Spinner } from '../icons'

const buttonVariants = cva('uppercase text-center outline-none', {
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
  variants: {
    disabled: {
      true: 'cursor-not-allowed',
    },
    intent: {
      danger: 'bg-danger text-white',
      primary: 'bg-orange text-white disabled:brightness-50',
    },
    loading: {
      true: 'flex items-center justify-center',
    },
    size: {
      medium: 'text-md px-8 py-4 variation-wght-600',
    },
  },
})

export type ButtonProps = ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean
    loadingMessage?: ReactNode
  }

export const Button = ({ children, disabled, intent, loading, loadingMessage, size, ...props }: ButtonProps) => (
  <button disabled={disabled} className={buttonVariants({ disabled, intent, loading, size })} {...props}>
    {loading && loadingMessage ? loadingMessage : children}
    {loading && <Spinner className="ml-4 w-4" />}
  </button>
)

import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Spinner } from '../icons'

const buttonVariants = cva('uppercase text-center outline-none', {
  variants: {
    intent: {
      primary: 'bg-orange text-white disabled:brightness-50',
    },
    size: {
      medium: 'text-md px-8 py-4 variation-wght-600',
    },
    disabled: {
      true: 'cursor-not-allowed',
    },
    loading: {
      true: 'flex items-center justify-center',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
})

type ButtonProps = ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean
    loadingMessage?: ReactNode
  }

export const Button = ({ children, disabled, intent, loading, loadingMessage, size, ...props }: ButtonProps) => (
  <button disabled={disabled} className={buttonVariants({ disabled, loading, intent, size })} {...props}>
    {loading && loadingMessage ? loadingMessage : children}
    {loading && <Spinner className="ml-4 w-4" />}
  </button>
)

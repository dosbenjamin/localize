import { cva, VariantProps } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'

const buttonVariants = cva('uppercase text-center', {
  variants: {
    intent: {
      primary: 'bg-orange text-white',
    },
    size: {
      medium: 'text-md px-8 py-4 variation-wght-600',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
})

type ButtonProps = PropsWithChildren<VariantProps<typeof buttonVariants>>

export const Button = ({ intent, size, ...props }: ButtonProps) => (
  <button className={buttonVariants({ intent, size })} {...props} />
)

import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef } from 'react'

const inputVariants = cva('placeholder:uppercase outline-none focus:ring-1', {
  variants: {
    intent: {
      primary: 'bg-purple-540 text-white placeholder:text-purple-180 ring-purple-360',
    },
    size: {
      base: 'text-base p-4',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'base',
  },
})

type InputProps = ComponentPropsWithoutRef<'input'> & VariantProps<typeof inputVariants>

export const Input = ({ intent, size, ...props }: InputProps) => (
  <input className={inputVariants({ intent, size })} {...props} />
)

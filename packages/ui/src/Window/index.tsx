import { type VariantProps, cva } from 'class-variance-authority'
import type { ComponentPropsWithoutRef } from 'react'

const windowVariants = cva('border-purple-360 border bg-purple-900', {
  defaultVariants: {
    size: 'base'
  },
  variants: {
    size: {
      sm: 'space-y-1 py-4 px-6',
      base: 'space-y-8 p-12'
    },
  }
})

type WindowProps = ComponentPropsWithoutRef<'div'> & VariantProps<typeof windowVariants>

export const Window = ({ className, size, ...props }: WindowProps) => (
  <div className={windowVariants({ className, size })} {...props} />
)

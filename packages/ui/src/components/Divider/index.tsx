import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef } from 'react'

const dividerVariants = cva('', {
  defaultVariants: {
    color: 'purple-360',
    orientation: 'horizontal',
  },
  variants: {
    color: {
      'purple-360': 'bg-purple-360',
    },
    orientation: {
      horizontal: 'h-px',
      vertical: 'w-px',
    },
  },
})

export type DividerProps = ComponentPropsWithoutRef<'div'> & VariantProps<typeof dividerVariants>

export const Divider = ({ className, color, orientation, ...props }: DividerProps) => (
  <div className={dividerVariants({ className, color, orientation })} {...props} />
)

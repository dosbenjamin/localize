import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithRef } from 'react'

const labelVariants = cva('uppercase', {
  variants: {
    color: {
      white: 'text-white',
    },
    size: {
      base: 'text-base variation-wght-500',
    },
  },
  defaultVariants: {
    color: 'white',
    size: 'base',
  },
})

type LabelProps = ComponentPropsWithRef<'label'> & VariantProps<typeof labelVariants>

export const Label = ({ size, color, ...props }: LabelProps) => (
  <label className={labelVariants({ color, size })} {...props} />
)

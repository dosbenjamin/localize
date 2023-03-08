import { type VariantProps, cva } from 'class-variance-authority'
import type { ComponentPropsWithRef } from 'react'

const labelVariants = cva('uppercase', {
  defaultVariants: {
    color: 'white',
    size: 'base',
  },
  variants: {
    color: {
      white: 'text-white',
    },
    size: {
      base: 'text-base variation-wght-500',
    },
  },
})

type LabelProps = ComponentPropsWithRef<'label'> & VariantProps<typeof labelVariants>

export const Label = ({ size, color, ...props }: LabelProps) => (
  <label className={labelVariants({ color, size })} {...props} />
)

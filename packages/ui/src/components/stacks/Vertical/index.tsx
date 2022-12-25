import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef } from 'react'

const verticalVariants = cva('flex flex-col', {
  variants: {
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
    },
    spacing: {
      '2': 'space-y-2',
      '4': 'space-y-4',
    },
  },
  defaultVariants: {
    spacing: '2',
  },
})

export type VerticalProps = ComponentPropsWithoutRef<'div'> & VariantProps<typeof verticalVariants>

export const Vertical = ({ align, className, spacing, ...props }: VerticalProps) => (
  <div className={verticalVariants({ align, className, spacing })} {...props} />
)

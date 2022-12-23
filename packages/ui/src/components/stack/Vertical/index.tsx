import { cva, type VariantProps } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'

const verticalVariants = cva('flex flex-col', {
  variants: {
    spacing: {
      '2': 'space-y-2',
      '4': 'space-y-4',
    },
  },
  defaultVariants: {
    spacing: '2',
  },
})

export type VerticalProps = PropsWithChildren & VariantProps<typeof verticalVariants>

export const Vertical = ({ spacing, ...props }: VerticalProps) => (
  <div className={verticalVariants({ spacing })} {...props} />
)

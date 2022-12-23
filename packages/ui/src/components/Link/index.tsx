import { polymorphicFactory } from '@polymorphic-factory/react'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ElementType } from 'react'

const linkVariants = cva('uppercase outline-none', {
  variants: {
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    color: {
      'purple-180': 'text-purple-180',
    },
    size: {
      base: 'text-base variation-wght-500',
    },
  },
  defaultVariants: {
    align: 'center',
    color: 'purple-180',
    size: 'base',
  },
})

type LinkProps = VariantProps<typeof linkVariants>

const poly = polymorphicFactory<ElementType, LinkProps>({
  styled:
    (component) =>
    ({ align, color, size, as: Component = component, ...props }) =>
      <Component className={linkVariants({ align, color, size })} {...props} />,
})

export const Link = poly<'a', LinkProps>('a')

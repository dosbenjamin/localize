import { polymorphicFactory } from '@polymorphic-factory/react'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithRef, ElementType } from 'react'

const linkVariants = cva('uppercase outline-none', {
  defaultVariants: {
    color: 'purple-180',
    size: 'base',
  },
  variants: {
    color: {
      'purple-180': 'text-purple-180',
    },
    size: {
      base: 'text-base variation-wght-500',
    },
  },
})

type LinkProps = ComponentPropsWithRef<'a'> & VariantProps<typeof linkVariants>

const poly = polymorphicFactory<ElementType, LinkProps>({
  styled:
    (component) =>
    ({ className, color, size, as: Component = component, ...props }) =>
      <Component className={linkVariants({ className, color, size })} {...props} />,
})

export const Link = poly<'a', LinkProps>('a')

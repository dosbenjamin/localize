import type { ComponentPropsWithRef, ElementType } from 'react'
import { type VariantProps, cva } from 'class-variance-authority'
import { polymorphicFactory } from '@polymorphic-factory/react'

const linkVariants = cva('outline-none', {
  defaultVariants: {
    color: 'purple-180',
    size: 'base',
  },
  variants: {
    color: {
      danger: 'text-danger',
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

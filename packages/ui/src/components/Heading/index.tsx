import { polymorphicFactory } from '@polymorphic-factory/react'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ElementType } from 'react'

const headingVariants = cva('uppercase', {
  variants: {
    size: {
      base: 'text-base',
      medium: 'text-md',
      large: 'text-lg variation-wdth-125 variation-wght-500',
      xlarge: 'text-xl',
    },
  },
})

export type HeadingProps = VariantProps<typeof headingVariants>

const poly = polymorphicFactory<ElementType, HeadingProps>({
  styled:
    (component) =>
    ({ as: Component = component, size, ...props }) =>
      <Component className={headingVariants({ size })} {...props} />,
})

export const Heading = poly<'h1', HeadingProps>('h1')

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

type HeadingProps = VariantProps<typeof headingVariants> & {
  className?: string | undefined
}

const poly = polymorphicFactory<ElementType, HeadingProps>({
  styled:
    (component) =>
    ({ as: Component = component, size, className, ...props }) =>
      <Component className={headingVariants({ className, size })} {...props} />,
})

export const Heading = poly<'h1', HeadingProps>('h1')

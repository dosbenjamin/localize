import type { ComponentPropsWithRef, ElementType } from 'react'
import { type VariantProps, cva } from 'class-variance-authority'
import { polymorphicFactory } from '@polymorphic-factory/react'

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

const poly = polymorphicFactory<ElementType, LabelProps>({
  styled:
    (component) =>
    ({ className, color, size, as: Component = component, ...props }) =>
      <Component className={labelVariants({ className, color, size })} {...props} />,
})

export const Label = poly<'label', LabelProps>('label')

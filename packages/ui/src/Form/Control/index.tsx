import type { ComponentPropsWithRef, ElementType } from 'react'
import { cx } from 'class-variance-authority'
import { polymorphicFactory } from '@polymorphic-factory/react'

type ControlProps = ComponentPropsWithRef<'div'>

const poly = polymorphicFactory<ElementType, ControlProps>({
  styled:
    (component) =>
    ({ className, as: Component = component, ...props }) =>
      <Component className={cx('space-y-2', className)} {...props} />,
})

export const Control = poly<'div', ControlProps>('div')

import type { ComponentPropsWithoutRef, ElementType } from 'react'

type BoxProps<C extends ElementType> = {
  as?: 'div' | C
} & ComponentPropsWithoutRef<C>

export const Box = <C extends ElementType>({
  as: Component = 'div',
  ...props
}: BoxProps<C>) => <Component {...props} />

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { type VariantProps, cva } from 'class-variance-authority'
import { Spinner } from '../Icons'
import { polymorphicFactory } from '@polymorphic-factory/react'

const buttonVariants = cva('text-center outline-none', {
  compoundVariants: [
    {
      className: 'except-loading-within:hidden',
      loading: true,
      variant: 'card',
    },
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'base',
  },
  variants: {
    disabled: {
      true: 'cursor-not-allowed pointer-events-none',
    },
    intent: {
      danger: 'bg-danger text-white',
      neutral: 'bg-white text-purple-900',
      primary: 'bg-orange text-white disabled:brightness-50',
      secondary: 'bg-purple-360 text-white fill-white',
      tertiary: 'bg-purple-540 text-white fill-purple-180',
    },
    loading: {
      true: 'flex items-center justify-center',
    },
    size: {
      base: 'text-base px-8 py-4 variation-wght-600',
      unstyled: null,
    },
    variant: {
      card: null,
    },
  },
})

type ButtonProps = ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean
    loadingMessage?: ReactNode
  }

const poly = polymorphicFactory<ElementType, ButtonProps>({
  styled:
    (component) =>
    ({
      as: Component = component,
      loadingMessage,
      children,
      className,
      disabled,
      intent,
      loading,
      size,
      variant,
      ...props
    }) =>
      (
        <Component className={buttonVariants({ className, disabled, intent, loading, size, variant })} {...props}>
          {loading && loadingMessage ? loadingMessage : children}
          {loading ? <Spinner className="ml-4 w-4" data-loading /> : null}
        </Component>
      ),
})

export const Button = poly<'button', ButtonProps>('button')

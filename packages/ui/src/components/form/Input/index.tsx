'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'

const inputVariants = cva('w-full placeholder:uppercase outline-none focus:ring-1', {
  variants: {
    intent: {
      primary: 'bg-purple-540 text-white placeholder:text-purple-180 ring-purple-360',
    },
    size: {
      base: 'text-base p-4',
    },
    error: {
      true: 'ring-1 ring-danger',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'base',
  },
})

type InputProps = ComponentPropsWithoutRef<'input'> &
  VariantProps<typeof inputVariants> & {
    errorMessage?: string
  }

export const Input = forwardRef<HTMLInputElement, InputProps>(({ errorMessage = '', intent, size, ...props }, ref) => {
  return (
    <div>
      <input ref={ref} className={inputVariants({ error: !!errorMessage, intent, size })} {...props} />
      <p role="alert" aria-atomic="true" className="text-danger mt-1">
        {errorMessage}
      </p>
    </div>
  )
})

Input.displayName = 'Input'

import { type ComponentPropsWithRef, forwardRef } from 'react'
import { type VariantProps, cva, cx } from 'class-variance-authority'
import { Form } from '../..'

const inputVariants = cva('w-full outline-none focus:ring-1', {
  defaultVariants: {
    intent: 'primary',
    size: 'base',
  },
  variants: {
    error: {
      true: 'ring-1 ring-danger',
    },
    intent: {
      primary: 'bg-purple-540 text-white placeholder:text-purple-180 ring-purple-360',
    },
    size: {
      base: 'text-base p-4',
    },
  },
})

type InputProps = ComponentPropsWithRef<'input'> &
  VariantProps<typeof inputVariants> & {
    errorMessage?: string
  }

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, errorMessage, intent, size, ...props }, ref) => {
    return (
      <div className={cx('space-y-2', className)}>
        <input ref={ref} className={inputVariants({ error: !!errorMessage, intent, size })} {...props} />
        <Form.Error>{errorMessage}</Form.Error>
      </div>
    )
  },
)

Input.displayName = 'Input'

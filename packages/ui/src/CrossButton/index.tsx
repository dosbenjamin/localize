import type { ComponentPropsWithRef } from 'react'
import { Icon } from '..'
import { cx } from 'class-variance-authority'

type CrossButtonProps = ComponentPropsWithRef<'button'>

export const CrossButton = ({ className, ...props }: CrossButtonProps) => (
  <button className={cx('bg-purple-540 grid aspect-square place-content-center', className)} {...props}>
    <Icon.Cross className="fill-purple-180 h-8 w-8" />
  </button>
)

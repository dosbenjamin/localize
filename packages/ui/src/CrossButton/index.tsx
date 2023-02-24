import { cx } from 'class-variance-authority'
import type { ComponentPropsWithoutRef } from 'react'
import { Icon } from '..'

type CrossButtonProps = ComponentPropsWithoutRef<'button'>

export const CrossButton = ({ className, ...props }: CrossButtonProps) => (
  <button className={cx('bg-purple-540 grid aspect-square place-content-center', className)} {...props}>
    <Icon.Cross className="fill-purple-180 h-10 w-10" />
  </button>
)

import type { ComponentPropsWithoutRef } from 'react'

export type CrossProps = ComponentPropsWithoutRef<'svg'>

export const Cross = (props: CrossProps) => (
  <svg viewBox="0 0 32 32" {...props}>
    <rect y="15" width="32" height="2" />
    <rect x="17" width="32" height="2" transform="rotate(90 17 0)" />
  </svg>
)

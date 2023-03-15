import type { PropsWithChildren } from 'react'

type ErrorProps = PropsWithChildren

export const Error = (props: ErrorProps) => (
  <p role="alert" aria-atomic="true" className="text-danger px-4 empty:absolute" {...props} />
)

import * as Dialog from '@radix-ui/react-dialog'
import type { PropsWithChildren } from 'react'

type DescriptionProps = PropsWithChildren<{
  className?: string
}>

export const Description = (props: DescriptionProps) => (
  <Dialog.Description {...props} />
)

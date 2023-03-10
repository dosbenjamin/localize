import * as AlertDialog from '@radix-ui/react-alert-dialog'
import type { PropsWithChildren } from 'react'

type DescriptionProps = PropsWithChildren<{
  className?: string
}>

export const Description = (props: DescriptionProps) => (
  <AlertDialog.Description {...props} />
)

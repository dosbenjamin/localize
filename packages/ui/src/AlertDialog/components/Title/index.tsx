import * as AlertDialog from '@radix-ui/react-alert-dialog'
import type { ComponentPropsWithoutRef } from 'react'
import { Heading } from '../../../Heading'

type TitleProps = ComponentPropsWithoutRef<typeof Heading>

export const Title = (props: TitleProps) => (
  <Heading as={AlertDialog.Title} size="large" {...props} />
)

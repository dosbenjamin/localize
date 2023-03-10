import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Heading } from '../../../Heading'
import type {  PropsWithChildren } from 'react'

type TitleProps = PropsWithChildren

export const Title = (props: TitleProps) => (
  <Heading as={AlertDialog.Title} size="large" {...props} />
)

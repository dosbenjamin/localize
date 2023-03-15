import * as Dialog from '@radix-ui/react-dialog'
import { Heading } from '../../../Heading'
import type { PropsWithChildren } from 'react'

type TitleProps = PropsWithChildren

export const Title = (props: TitleProps) => (
  <Dialog.Title asChild>
    <Heading size="large" {...props} />
  </Dialog.Title>
)

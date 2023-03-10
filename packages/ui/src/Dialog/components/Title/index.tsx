import * as Dialog from '@radix-ui/react-dialog'
import type { ComponentPropsWithoutRef } from 'react'
import { Heading } from '../../../Heading'

type TitleProps = ComponentPropsWithoutRef<typeof Heading>

export const Title = (props: TitleProps) => (
  <Heading as={Dialog.Title} size="large" {...props} />
)

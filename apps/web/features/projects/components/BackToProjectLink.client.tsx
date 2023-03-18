'use client'

import { Link as CustomLink } from '@localize/ui'
import Link from 'next/link'
import { useProject } from '@localize/web/features/projects/client'

export const BackToProjectLink = () => {
  const { title } = useProject()

  return (
    <CustomLink as={Link} href={`/projects/`}>
      Back to {title}
    </CustomLink>
  )
}

import { Link as CustomLink, Heading } from '@localize/ui'
import Link from 'next/link'
import { SignUpForm } from '@localize/web/features/auth/client'

const RegisterPage = () => (
  <>
    <Heading size="large" className="text-center">
      Register
    </Heading>
    <SignUpForm />
    <CustomLink as={Link} href="/login" className="text-center">
      Already have an account? Sign in instead!
    </CustomLink>
  </>
)

export default RegisterPage

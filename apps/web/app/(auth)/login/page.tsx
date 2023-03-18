import { Link as CustomLink, Heading } from '@localize/ui'
import Link from 'next/link'
import { SignInForm } from '@localize/web/features/auth/client'

const LoginPage = () => (
  <>
    <Heading size="large" className="text-center">
      Login
    </Heading>
    <SignInForm />
    <CustomLink as={Link} href="/register" className="text-center">
      No account? Sign up here!
    </CustomLink>
  </>
)

export default LoginPage

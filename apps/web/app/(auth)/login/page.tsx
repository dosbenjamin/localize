import { Heading, Link as CustomLink } from '@localize/ui'
import { LoginForm } from 'features/auth/client'
import Link from 'next/link'

const Login = () => (
  <>
    <Heading size="large" className="text-center">
      Login
    </Heading>
    <LoginForm />
    <CustomLink as={Link} href="/register" className="text-center">
      No account? Sign up here!
    </CustomLink>
  </>
)

export default Login

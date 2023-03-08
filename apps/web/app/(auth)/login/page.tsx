import { Link as CustomLink, Heading } from '@localize/ui'
import Link from 'next/link'
import { LoginForm } from 'features/auth/client'

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

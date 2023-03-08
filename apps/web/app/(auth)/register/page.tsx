import { Link as CustomLink, Heading } from '@localize/ui'
import Link from 'next/link'
import { RegisterForm } from 'features/auth/client'

const Register = () => (
  <>
    <Heading size="large" className="text-center">
      Register
    </Heading>
    <RegisterForm />
    <CustomLink as={Link} href="/login" className="text-center">
      Already have an account? Sign in instead!
    </CustomLink>
  </>
)

export default Register

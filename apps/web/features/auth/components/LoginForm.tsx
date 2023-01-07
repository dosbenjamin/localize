'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Form, Heading, Link as CustomLink } from '@localize/ui'
import type { AuthError } from '@supabase/supabase-js'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast/headless'
import { useSignIn } from '../hooks/use-sign-in'
import { signInSchema, type SignInSchema } from '../schemas/sign-in'
import { AuthForm } from './AuthForm'

export const LoginForm = () => {
  const router = useRouter()
  const { mutateAsync: signIn, isLoading } = useSignIn()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  })

  const handleLogin = handleSubmit(async (data) => {
    try {
      await toast.promise(signIn(data), {
        error: ({ message }: AuthError) => message,
        loading: 'Signing in...',
        success: 'Successfully signed in',
      })

      router.push('/dashboard')
    } catch {
      toast('😔 Try again!')
    }
  })

  return (
    <AuthForm
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleLogin}
      top={
        <Heading size="large" className="text-center">
          Login
        </Heading>
      }
      bottom={
        <>
          <Button disabled={isLoading} loading={isLoading} loadingMessage="Signing in">
            Sign in
          </Button>
          <CustomLink as={Link} href="/register" className="text-center">
            No account? Sign up here!
          </CustomLink>
        </>
      }
    >
      <Form.Control>
        <Form.Label>Email</Form.Label>
        <Form.Input
          type="email"
          placeholder="mail@example.org"
          errorMessage={errors.email?.message}
          {...register('email')}
        />
      </Form.Control>
      <Form.Control>
        <Form.Label>Password</Form.Label>
        <Form.Input
          type="password"
          placeholder="********"
          errorMessage={errors.password?.message}
          {...register('password')}
        />
      </Form.Control>
    </AuthForm>
  )
}

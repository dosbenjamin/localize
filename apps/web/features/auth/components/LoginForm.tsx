'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Form, Heading, Link as CustomLink, Stack } from '@localize/ui'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast/headless'
import { useSignIn } from '../hooks/use-sign-in'
import { signInSchema, type SignInSchema } from '../schemas/sign-in'
import { AuthForm } from './AuthForm'

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  })

  const { mutateAsync: signIn, isLoading } = useSignIn()

  const handleLogin = handleSubmit(async (data) => {
    await toast.promise(signIn(data), {
      loading: 'Connecting...',
      success: (message: string) => message,
      error: (message: string) => message,
    })
  })

  return (
    <AuthForm
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleLogin}
      top={
        <Heading size="large" align="center">
          Login
        </Heading>
      }
      bottom={
        <>
          <Button disabled={isLoading} loading={isLoading} loadingMessage="Signing in">
            Sign in
          </Button>
          <CustomLink as={Link} href="/register">
            No account? Sign up here!
          </CustomLink>
        </>
      }
    >
      <Stack.Vertical>
        <Form.Label>Email</Form.Label>
        <Form.Input
          type="email"
          placeholder="mail@example.org"
          errorMessage={errors.email?.message}
          {...register('email')}
        />
      </Stack.Vertical>
      <Stack.Vertical>
        <Form.Label>Password</Form.Label>
        <Form.Input
          type="password"
          placeholder="********"
          errorMessage={errors.password?.message}
          {...register('password')}
        />
      </Stack.Vertical>
    </AuthForm>
  )
}

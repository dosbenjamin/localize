'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Form, Heading, Link as CustomLink, Stack } from '@localize/ui'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast/headless'
import { useSignUp } from '../hooks/use-sign-up'
import { signUpSchema, SignUpSchema } from '../schemas/sign-up'
import { AuthForm } from './AuthForm'

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  })

  const { mutateAsync: signUp, isLoading } = useSignUp()

  const handleRegister = handleSubmit(async (data) => {
    await toast.promise(signUp(data), {
      loading: 'Signing up...',
      success: (message: string) => message,
      error: (message: string) => message,
    })
  })

  return (
    <AuthForm
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleRegister}
      top={
        <Heading size="large" align="center">
          Register
        </Heading>
      }
      bottom={
        <>
          <Button disabled={isLoading} loading={isLoading} loadingMessage="Signing up">
            Sign up
          </Button>
          <CustomLink as={Link} href="/login">
            Already have an account? Sign in instead!
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
      <Stack.Vertical>
        <Form.Label>Confirm password</Form.Label>
        <Form.Input
          type="password"
          placeholder="********"
          errorMessage={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />
      </Stack.Vertical>
    </AuthForm>
  )
}

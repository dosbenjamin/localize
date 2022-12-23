'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { supabase } from 'lib/supabase.client'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Button, Form, Heading, Link as CustomLink, Stack } from 'ui'
import * as z from 'zod'
import { AuthForm } from './AuthForm'

const registerSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .strict()

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  })

  const handleRegister = handleSubmit(async (values) => {
    await supabase.auth.signUp(values)
  })

  return (
    <AuthForm
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleRegister}
      top={
        <Heading as="h1" size="large" align="center">
          Register
        </Heading>
      }
      bottom={
        <>
          <Button>Sign up</Button>
          <CustomLink as={Link} href="/login">
            Already have an account? Log in instead!
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

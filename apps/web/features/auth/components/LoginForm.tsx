'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Form, Heading, Link as CustomLink, Stack } from '@localize/ui'
import { supabase } from 'lib/supabase.client'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { AuthForm } from './AuthForm'

const loginSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
  })
  .strict()

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  })

  const handleLogin = handleSubmit(async (values) => {
    await supabase.auth.signInWithPassword(values)
  })

  return (
    <AuthForm
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleLogin}
      top={
        <Heading as="h1" size="large" align="center">
          Login
        </Heading>
      }
      bottom={
        <>
          <Button>Log in</Button>
          <CustomLink as={Link} href="/register">
            No account? Register here!
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

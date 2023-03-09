'use client'

import { Button, Form } from '@localize/ui'
import { type SignInSchema, signInSchema, useSignIn } from '@localize/web/features/auth/client'
import type { AuthError } from '@supabase/supabase-js'
import { toast } from 'react-hot-toast/headless'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const LoginForm = () => {
  const { mutateAsync: signIn, isLoading: isSigningIn } = useSignIn()

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
    } catch {
      toast('😔 Try again!')
    }
  })

  return (
    <>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleLogin}
        id="login-form"
        className="space-y-4"
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
      </form>
      <Button form="login-form" disabled={isSigningIn} loading={isSigningIn} loadingMessage="Signing in">
        Sign in
      </Button>
    </>
  )
}

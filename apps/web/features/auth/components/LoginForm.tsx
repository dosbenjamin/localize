'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Form } from '@localize/ui'
import type { AuthError } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast/headless'
import { useSignIn } from '../hooks/use-sign-in'
import { signInSchema, type SignInSchema } from '../schemas/sign-in-schema'

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
      <Button form="login-form" disabled={isLoading} loading={isLoading} loadingMessage="Signing in">
        Sign in
      </Button>
    </>
  )
}

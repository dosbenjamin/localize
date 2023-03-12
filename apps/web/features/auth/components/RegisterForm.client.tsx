'use client'

import { Button, Form } from '@localize/ui'
import { SignUpSchema, type SignUpValues, useSignUp } from '@localize/web/features/auth/client'
import type { AuthError } from '@supabase/supabase-js'
import { toast } from 'react-hot-toast/headless'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const RegisterForm = () => {
  const { mutateAsync: signUp, isLoading: isSigningUp } = useSignUp()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>({
    resolver: zodResolver(SignUpSchema),
  })

  const handleRegister = handleSubmit(async (data) => {
    try {
      await toast.promise(signUp(data), {
        error: ({ message }: AuthError) => message,
        loading: 'Signing up...',
        success: 'Successfully signed up',
      })
    } catch {
      toast('😔 Try again!')
    }
  })

  return (
    <>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleRegister}
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
        <Form.Control>
          <Form.Label>Confirm password</Form.Label>
          <Form.Input
            type="password"
            placeholder="********"
            errorMessage={errors.confirmPassword?.message}
            {...register('confirmPassword')}
          />
        </Form.Control>
      </form>
      <Button id="register-form" disabled={isSigningUp} loading={isSigningUp} loadingMessage="Signing up">
        Sign up
      </Button>
    </>
  )
}

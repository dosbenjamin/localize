'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Form } from '@localize/ui'
import type { AuthError } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast/headless'
import { useSignUp } from '../hooks/use-sign-up'
import { signUpSchema, type SignUpSchema } from '../schemas/sign-up-schema'

export const RegisterForm = () => {
  const router = useRouter()
  const { mutateAsync: signUp, isLoading } = useSignUp()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  })

  const handleRegister = handleSubmit(async (data) => {
    try {
      await toast.promise(signUp(data), {
        error: ({ message }: AuthError) => message,
        loading: 'Signing up...',
        success: () => 'Successfully signed up',
      })
    } catch {
      toast('😔 Try again!')
    }

    router.push('/dashboard')
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
      <Button id="register-form" disabled={isLoading} loading={isLoading} loadingMessage="Signing up">
        Sign up
      </Button>
    </>
  )
}

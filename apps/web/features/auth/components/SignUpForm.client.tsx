'use client'

import { Button, Form } from '@localize/ui'
import { type SignUpInput, SignUpInputSchema } from '@localize/web/features/auth'
import { toast } from 'react-hot-toast/headless'
import { useForm } from 'react-hook-form'
import { useSignUp } from '@localize/web/features/auth/client'
import { zodResolver } from '@hookform/resolvers/zod'

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInput>({
    resolver: zodResolver(SignUpInputSchema),
  })

  const { mutateAsync: signUp, isLoading: isSigningUp } = useSignUp({
    onError: () => toast('😔 Try again!'),
  })

  const handleRegister = handleSubmit(async (data) => {
    await toast.promise(signUp(data), {
      error: (message: string) => message,
      loading: 'Signing up...',
      success: 'Successfully signed up',
    })
  })

  return (
    <>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleRegister}
        id="register-form"
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
            errorMessage={errors.passwordConfirmation?.message}
            {...register('passwordConfirmation')}
          />
        </Form.Control>
      </form>
      <Button form="register-form" disabled={isSigningUp} loading={isSigningUp} loadingMessage="Signing up">
        Sign up
      </Button>
    </>
  )
}

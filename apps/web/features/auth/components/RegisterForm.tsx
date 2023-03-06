'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Form, Heading, Link as CustomLink } from '@localize/ui'
import type { AuthError } from '@supabase/supabase-js'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast/headless'
import { useSignUp } from '../hooks/use-sign-up'
import { signUpSchema, type SignUpSchema } from '../schemas/sign-up-schema'
import { AuthForm } from './AuthForm'

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
    <AuthForm
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleRegister}
      top={
        <Heading size="large" className="text-center">
          Register
        </Heading>
      }
      bottom={
        <>
          <Button disabled={isLoading} loading={isLoading} loadingMessage="Signing up">
            Sign up
          </Button>
          <CustomLink as={Link} href="/login" className="text-center">
            Already have an account? Sign in instead!
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
      <Form.Control>
        <Form.Label>Confirm password</Form.Label>
        <Form.Input
          type="password"
          placeholder="********"
          errorMessage={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />
      </Form.Control>
    </AuthForm>
  )
}

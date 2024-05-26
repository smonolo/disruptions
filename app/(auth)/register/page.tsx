'use client'

import AuthCard from '@/components/auth/auth-card'
import { register } from '@/lib/api/auth'
import { useForm } from '@tanstack/react-form'
import Link from 'next/link'

export default function Register() {
  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: ''
    },
    onSubmit: async ({ value }) => {
      try {
        await register(value)
      } catch (error) {
        console.error(error)
      }
    }
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.stopPropagation()
    form.handleSubmit()
  }

  return (
    <AuthCard title="Welcome" text="Sign up for an account.">
      <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
        <form.Field name="username">
          {field => (
            <input
              type="text"
              value={field.state.value}
              className="d-input"
              placeholder="Username"
              minLength={3}
              maxLength={20}
              required
              disabled={form.state.isSubmitting}
              onChange={event => field.handleChange(event.target.value)}
            />
          )}
        </form.Field>
        <form.Field name="email">
          {field => (
            <input
              type="email"
              value={field.state.value}
              className="d-input"
              placeholder="Email address"
              maxLength={350}
              required
              disabled={form.state.isSubmitting}
              onChange={event => field.handleChange(event.target.value)}
            />
          )}
        </form.Field>
        <form.Field name="password">
          {field => (
            <input
              type="password"
              value={field.state.value}
              className="d-input"
              placeholder="Password"
              minLength={6}
              maxLength={128}
              required
              disabled={form.state.isSubmitting}
              onChange={event => field.handleChange(event.target.value)}
            />
          )}
        </form.Field>
        <button
          type="submit"
          className="d-button"
          disabled={form.state.isSubmitting}
        >
          Sign up
        </button>
      </form>
      <p className="mt-6 text-center text-sm font-medium text-d-white-950">
        Already have an account?{' '}
        <Link href="/login">
          <span className="text-d-brand-50 transition-colors hover:text-d-brand-950">
            Sign in
          </span>
        </Link>
      </p>
    </AuthCard>
  )
}

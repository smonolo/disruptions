'use client'

import AuthCard from '@/components/auth/auth-card'
import Link from 'next/link'

export default function Register() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log('form submitted')
  }

  return (
    <AuthCard title="Welcome" text="Sign up for an account.">
      <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="d-input"
          placeholder="Username"
          minLength={3}
          maxLength={20}
          required
        />
        <input
          type="email"
          className="d-input"
          placeholder="Email address"
          maxLength={350}
          required
        />
        <input
          type="password"
          className="d-input"
          placeholder="Password"
          minLength={6}
          maxLength={128}
          required
        />
        <button type="submit" className="d-button">
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

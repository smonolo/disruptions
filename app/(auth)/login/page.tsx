'use client'

import AuthCard from '@/components/auth/auth-card'
import Link from 'next/link'

export default function Login() {
  return (
    <AuthCard title="Welcome back" text="Sign in to your account to continue.">
      <form className="flex flex-col gap-y-3">
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
          Sign in
        </button>
      </form>
      <p className="mt-6 text-center text-sm font-medium text-d-white-950">
        Don&apos;t have an account?{' '}
        <Link href="/register">
          <span className="text-d-brand-50 transition-colors hover:text-d-brand-950">
            Sign up
          </span>
        </Link>
      </p>
    </AuthCard>
  )
}

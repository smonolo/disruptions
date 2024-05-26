import { apiRequest } from '@/lib/api'

type RegistrationData = {
  username: string
  email: string
  password: string
}

export const register = async ({
  username,
  email,
  password
}: RegistrationData) =>
  await apiRequest('auth/register', {
    method: 'POST',
    body: JSON.stringify({ username, email, password })
  })

type LoginData = {
  email: string
  password: string
}

export const login = async ({ email, password }: LoginData) =>
  await apiRequest('auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  })

type RegistrationData = {
  username: string
  email: string
  password: string
}

export const register = async ({
  username,
  email,
  password
}: RegistrationData) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    }
  )

  if (!response.ok) {
    const { error } = await response.json()

    throw new Error(error)
  }

  return response.json()
}

type LoginData = {
  email: string
  password: string
}

export const login = async ({ email, password }: LoginData) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    }
  )

  if (!response.ok) {
    const { error } = await response.json()

    throw new Error(error)
  }

  return response.json()
}

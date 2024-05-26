export const apiRequest = async (endpoint: string, options: RequestInit) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`,
      {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        }
      }
    )

    if (!response.ok) {
      const { error } = await response.json()

      throw new Error(error)
    }

    return response.json()
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }

    throw new Error('An error occured.')
  }
}

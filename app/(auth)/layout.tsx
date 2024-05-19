import { PropsWithChildren } from 'react'

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-d-black-950">
      {children}
    </main>
  )
}

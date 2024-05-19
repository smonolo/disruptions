import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import type { PropsWithChildren } from 'react'

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <section className="w-full">
        <Navbar />
        <main>{children}</main>
      </section>
      <Footer />
    </div>
  )
}

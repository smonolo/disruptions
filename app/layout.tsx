import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import StoreProvider from '@/components/store/provider'
import classNames from 'classnames'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Disruptions',
    default: 'Disruptions | Real-time service updates'
  },
  description: 'Real-time updates about services you use.',
  alternates: {
    canonical: '/'
  },
  applicationName: 'Disruptions',
  authors: [
    {
      name: 'Stefano Monolo <stefano@disruptions.app>',
      url: 'https://disruptions.app'
    }
  ],
  creator: 'Stefano Monolo <stefano@disurptions.app>',
  metadataBase: new URL('https://disruptions.app'),
  openGraph: {
    title: 'Disruptions | Real-time service updates',
    description: 'Real-time updates about services you use.',
    url: 'https://disruptions.app',
    siteName: 'Disruptions',
    type: 'website'
  },
  publisher: 'Stefano Monolo <stefano@disruptions.app>',
  robots: {
    index: true,
    follow: true
  },
  twitter: {
    card: 'summary',
    site: '@disruptionsapp',
    creator: '@stmonolo',
    title: 'Disruptions',
    description: 'Real-time updates about services you use.'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#151515'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={classNames(
            inter.className,
            'm-0 flex min-h-screen w-full flex-col justify-between bg-d-white-50 p-0 text-d-black-50'
          )}
        >
          <section className="w-full">
            <Navbar />
            <main>{children}</main>
          </section>
          <Footer />
        </body>
      </html>
    </StoreProvider>
  )
}

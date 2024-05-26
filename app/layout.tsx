import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import StoreProvider from '@/components/providers/store-provider'
import classNames from 'classnames'
import type { PropsWithChildren } from 'react'
import { QueryProvider } from '@/components/providers/query-provider'

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

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <QueryProvider>
      <StoreProvider>
        <html lang="en">
          <body
            className={classNames(
              inter.className,
              'm-0 min-h-screen w-full bg-d-black-50 p-0 text-d-white-50'
            )}
          >
            {children}
          </body>
        </html>
      </StoreProvider>
    </QueryProvider>
  )
}

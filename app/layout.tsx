import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Disruptions',
    default: 'Disruptions'
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
    title: 'Disruptions',
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
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}

import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Disruptions',
    short_name: 'Disruptions',
    description: 'Real-time updates about services you use.',
    start_url: '/',
    display: 'standalone',
    background_color: '#151515',
    theme_color: '#151515',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  }
}

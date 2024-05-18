import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'd-brand': {
          50: '#DB2042',
          950: '#C21C3A'
        },
        'd-white': {
          50: '#FFFFFF',
          950: '#EFEEEE'
        },
        'd-black': {
          50: '#151515',
          950: '#101010'
        }
      }
    }
  },
  plugins: []
}

export default config

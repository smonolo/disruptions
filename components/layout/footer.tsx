'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 py-2">
      <ul className="mx-auto flex w-full max-w-[1500px] items-center justify-between gap-x-4">
        <li>
          <span className="text-sm">
            © {new Date().getFullYear()} Disruptions
          </span>
        </li>
        <li>
          <span className="text-sm">
            Built by{' '}
            <Link
              href="https://smnl.dev"
              target="_blank"
              className="font-medium hover:underline"
            >
              Stefano Monolo
            </Link>
          </span>
        </li>
      </ul>
    </footer>
  )
}

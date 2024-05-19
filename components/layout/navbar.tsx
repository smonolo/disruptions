'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full border-b border-neutral-200 py-4">
      <ul className="mx-auto w-full max-w-[1500px]">
        <li>
          <Link href="/">
            <span className="text-lg font-bold text-d-brand-50">
              ~ Disruptions
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

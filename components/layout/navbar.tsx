'use client'

import Link from 'next/link'
import Dropdown, { type DropdownItem } from '@/components/common/dropdown'

const productItems: DropdownItem[] = [{ text: 'About', url: '/about' }]

export default function Navbar() {
  return (
    <nav className="w-full border-b border-neutral-800 py-4">
      <ul className="mx-auto grid w-full max-w-[1500px] grid-cols-3">
        <li className="flex w-full items-center">
          <ul className="flex w-fit items-center gap-x-5">
            <li>
              <Link href="/">
                <span className="text-[60px]/[40px] font-bold text-d-brand-50 transition-colors hover:text-d-brand-950">
                  ~
                </span>
              </Link>
            </li>
            <li>
              <Dropdown items={productItems}>
                <span className="font-medium">Product</span>
              </Dropdown>
            </li>
          </ul>
        </li>
        <li className="flex w-full items-center justify-center">
          <input
            type="text"
            className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-2 outline-none placeholder:text-neutral-500"
            placeholder="Search for services"
          />
        </li>
        <li className="flex w-full items-center justify-end">
          <ul className="flex w-fit items-center gap-x-5">
            <li>
              <Link href="/login">
                <span className="font-medium transition-colors hover:text-d-white-950">
                  Sign in
                </span>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <button className="rounded-lg bg-d-brand-50 px-3 py-1.5 font-semibold text-d-white-50 transition-colors hover:bg-d-brand-950">
                  Sign up
                </button>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

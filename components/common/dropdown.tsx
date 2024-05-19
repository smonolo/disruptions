'use client'

import classNames from 'classnames'
import Link from 'next/link'
import {
  type PropsWithChildren,
  useState,
  useEffect,
  useRef,
  useCallback
} from 'react'

export type DropdownItem = {
  text: string
  url: string
}

type Props = {
  items: DropdownItem[]
}

export default function Dropdown({
  children,
  items
}: PropsWithChildren<Props>) {
  const [isOpen, setOpen] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleClick = useCallback((event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setOpen(false)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', handleClick)
    }

    return () => window.removeEventListener('click', handleClick)
  }, [isOpen, handleClick])

  return (
    <div ref={containerRef} className="relative">
      <div
        className="flex w-fit cursor-pointer items-center gap-x-1.5"
        onClick={() => setOpen(!isOpen)}
      >
        {children}
        <i
          className={classNames(
            'bi bi-chevron-down text-xs transition-transform',
            {
              'rotate-180': isOpen
            }
          )}
        />
      </div>
      <ul
        className={classNames(
          'absolute left-1/2 top-8 min-w-[150px] -translate-x-1/2 rounded-lg border border-neutral-800 bg-d-black-50 p-2 shadow-sm',
          isOpen ? 'block' : 'hidden'
        )}
      >
        {items.map((item, index) => (
          <li key={index} className="w-full" onClick={() => setOpen(false)}>
            <Link
              href={item.url}
              target={item.url.startsWith('https://') ? '_blank' : '_self'}
            >
              <div className="w-full rounded px-2 py-1 transition-colors hover:bg-neutral-800">
                <span>{item.text}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

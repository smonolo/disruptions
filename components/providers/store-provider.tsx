'use client'

import { makeStore, type AppStore } from '@/lib/store'
import { useRef, type PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

export default function StoreProvider({ children }: PropsWithChildren) {
  const storeRef = useRef<AppStore>()

  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}

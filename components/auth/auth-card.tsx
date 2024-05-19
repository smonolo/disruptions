import type { PropsWithChildren } from 'react'

type Props = {
  title: string
  text: string
}

export default function AuthCard({
  children,
  title,
  text
}: PropsWithChildren<Props>) {
  return (
    <div className="flex w-[500px] flex-col gap-y-8 rounded-xl border border-neutral-800 bg-d-black-50 p-10 shadow-sm">
      <hgroup className="flex flex-col text-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="font-medium text-d-white-950">{text}</p>
      </hgroup>
      <div>{children}</div>
    </div>
  )
}

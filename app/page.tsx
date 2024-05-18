import classNames from 'classnames'
import Link from 'next/link'

const socials = {
  'twitter-x': 'https://x.com/disruptionsapp',
  envelope: 'mailto:stefano@disruptions.app'
}

export default function Home() {
  return (
    <section className="from-d-black-50 to-d-black-950 flex h-screen w-full flex-col items-center justify-center gap-y-10 bg-gradient-to-b">
      <hgroup className="flex w-fit flex-col text-center">
        <h1 className="text-d-brand-50 text-[100px]/[80px] font-extrabold">
          ~
        </h1>
        <p className="text-d-white-950">
          <span className="text-d-brand-50">Disruptions.</span> Real-time
          updates about services you use.
        </p>
      </hgroup>
      <li className="flex items-center gap-x-3">
        {Object.entries(socials).map(([icon, url]) => (
          <ul key={icon}>
            <Link
              href={url}
              target={url.startsWith('https://') ? '_blank' : '_self'}
            >
              <i
                className={classNames(
                  `bi bi-${icon}`,
                  'text-d-white-950 hover:text-d-white-50 transition-colors'
                )}
              />
            </Link>
          </ul>
        ))}
      </li>
    </section>
  )
}

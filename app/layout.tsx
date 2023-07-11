import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import ic_home from '../public/ic-home.svg'
import ic_search from '../public/ic-search.svg'
import ic_bookmark from '../public/ic-bookmark.svg'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movie App',
  description: 'Built using create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <nav className="bg-bg flex items-center justify-around m-auto max-w-screen-md py-6 sticky bottom-0">
          {[
            { text: 'Home', href: '/', icon: ic_home },
            { text: 'Search', href: '/search', icon: ic_search },
            { text: 'Favorites', href: '/favorites', icon: ic_bookmark },
          ].map(i => (
            <Link className={`font-semibold text-[0.6875rem] ${'/' === i.href ? 'text-white' : 'text-[#6F6175]'}`} href={i.href} key={i.text}>
              <div className="h-[1.125rem] w-[1.125rem] relative mx-auto mb-2">
                <Image alt={i.text} src={i.icon} fill sizes="1.125rem" style={{ objectFit: 'contain' }} />
              </div>
              {i.text}
            </Link>
          ))}
        </nav>
      </body>
    </html>
  )
}

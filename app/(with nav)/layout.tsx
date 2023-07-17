'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ic_home from '@/public/ic-home.svg'
import ic_home_active from '@/public/ic-home-active.svg'
import ic_search from '@/public/ic-search.svg'
import ic_search_active from '@/public/ic-search-active.svg'
import ic_bookmark from '@/public/ic-bookmark.svg'
import ic_bookmark_active from '@/public/ic-bookmark-active.svg'
import { Icon } from '@/components/Icon'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  return (
    <>
      {children}
      <nav className="bg-bg flex items-center justify-around m-auto max-w-screen-md py-6 sticky bottom-0">
        {[
          { text: 'Home', href: '/', icon: ic_home, iconActive: ic_home_active },
          { text: 'Search', href: '/search', icon: ic_search, iconActive: ic_search_active },
          { text: 'Favorites', href: '/favorites', icon: ic_bookmark, iconActive: ic_bookmark_active },
        ].map(i => (
          <Link className={`font-semibold text-[0.6875rem] ${pathname === i.href ? 'text-white' : 'text-[#6F6175]'}`} href={i.href} key={i.text}>
            <Icon alt={i.text} className="mx-auto mb-2" fit="contain" src={pathname === i.href ? i.iconActive : i.icon} size="1.125rem" />
            {i.text}
          </Link>
        ))}
      </nav>
    </>
  )
}

'use client'
import { useRouter } from 'next/navigation'
import { Movie } from "@/components/Movie"
import ic_back from '@/public/ic-back.svg'
import { Icon } from '@/components/Icon'

export default function LatestMovies() {
  const { back } = useRouter();
  return (
    <main className="bg-bg m-auto max-w-screen-md min-h-screen">
      <header className="py-8 px-6 flex gap-3 items-center">
        <h1 className="text-xl text-white">Latest Movies</h1>
        <button className="bg-gray-700 rounded-md h-[1.875rem] w-[1.875rem] flex items-center justify-center" onClick={back}>
        <Icon alt="icon back" src={ic_back} size="1.25rem" fit="cover" />
        </button>
      </header>
      <section className="flex flex-wrap gap-4 pb-6 px-6">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </section>
    </main>
  )
}

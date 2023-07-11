import Link from 'next/link'
import { Movie } from '../components/Movie';

export const src = 'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg';

export default function Home() {
  return (
    <main className="bg-bg m-auto max-w-screen-md min-h-screen">
      <h1 className="py-8 px-6 text-lg text-white">Home</h1>
      <ul className="mb-2 overflow-hidden whitespace-nowrap">
        <Banner />
        <Banner full />
        <Banner />
      </ul>
      <div className="flex items-center justify-center mb-6">
        <div className="bg-white h-2 opacity-40 rounded-full w-2" />
        <div className="bg-white h-2 mx-2 rounded-full w-2" />
        <div className="bg-white h-2 opacity-40 rounded-full w-2" />
      </div>
      <section className="mb-12">
        <div className="flex items-end justify-between mb-4">
          <h2 className="px-4 text-lg text-white">Latest Movies</h2>
          <Link className="px-2 text-sm text-white" href="/latest-movies">See All</Link>
        </div>
        <div className="h-[11rem] overflow-hidden">
          <div className="flex gap-4 overflow-auto pb-2 px-4 whitespace-nowrap">
            <Movie />
            <Movie />
            <Movie />
          </div>
        </div>
      </section>
      <section className="pb-6">
        <div className="flex items-end justify-between mb-4">
          <h2 className="px-4 text-lg text-white">Now Playing</h2>
          <Link className="px-2 text-sm text-white" href="/now-playing">See All</Link>
        </div>
        <div className="h-[11rem] overflow-hidden">
          <div className="flex gap-4 overflow-auto pb-2 px-4 whitespace-nowrap">
            <Movie />
            <Movie />
            <Movie />
          </div>
        </div>
      </section>
    </main>
  )
}

const Banner = ({ full }: { full?: boolean }) => {
  const transform = `transform -translate-x-64 ${full ? '' : 'scale-90'}`;
  return (
    <li className={`${transform} bg-[#8FACB3] h-[11.25rem] inline-block mx-auto mr-4 last:mr-0 rounded-md w-[18rem]`}>
      <div className="bg-gradient-to-b from-transparent to-gray-800/40 flex items-end justify-between h-full p-4">
        <div>
          <h3 className="text-base text-white">Akuaman The Saga</h3>
          <div className="flex items-center">
            <p className="mr-2 text-[0.6875rem] text-white">7.5</p>
            <p className="opacity-40 text-sm text-white">1h 45min | Fantasy</p>
          </div>
        </div>
        <button className="bg-white/10 h-[2.3rem] rounded-full w-[2.3rem] flex items-center justify-center">
          <div className="bg-white h-[1.75rem] rounded-full w-[1.75rem] flex items-center justify-center">
            <div className="w-2 ml-1 overflow-hidden inline-block">
              <div className="h-3 bg-gradient-to-r from-[#D702FB] to-[#1A54FF] rotate-45 transform origin-top-left"></div>
            </div>
          </div>
        </button>
      </div>
    </li>
  )
}



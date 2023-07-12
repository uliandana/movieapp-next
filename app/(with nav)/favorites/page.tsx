import Image from 'next/image'
import Link from 'next/link'

const src = 'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg';

export default function Favorites() {
  return (
    <main className="bg-bg m-auto max-w-screen-md min-h-screen">
      <h1 className="mb-7 pt-8 px-6 text-2xl text-white">Favorites</h1>
      <section className="pb-6 px-6 flex flex-col gap-6">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </section>
    </main>
  )
}

const Movie = () => {
  return (
    <Link className="flex items-center" href="/movie/120023">
      <div className="h-[4.375rem] mr-4 rounded-md w-[6.25rem] relative overflow-hidden">
        <Image
          alt="Image movie"
          fill
          priority
          sizes="6.25rem"
          style={{ objectFit: 'cover', objectPosition: '0 0' }}
          src={src} />
      </div>
      <div>
        <h3 className="mb-2 text-white text-sm">Matt Max: Fury Way</h3>
        <div className="flex items-center">
          <p className="mr-2 text-[0.625rem] text-white">7.5</p>
          <p className="opacity-40 text-[0.6875rem] text-white">1h 45min | action</p>
        </div>
      </div>
    </Link>
  )
}

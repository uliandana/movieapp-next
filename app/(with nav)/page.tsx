import Link from 'next/link'
import { Movie, MovieNew } from '../../components/Movie';

interface Movie {
  id: number,
  title: string,
  rating: number,
  genre: number,
  poster: string,
};

const bearer = `Bearer ${process.env.API_KEY}`;
const headers = {
  'Authorization': bearer,
};

const fetchMovie = async (url:string) => {
  try {
    const res = await fetch(url, { headers })
    if (!res.ok) {
      throw {};
    }
    const json = await res.json();
    return json.results.map(((i: any) => ({
      id: i?.id,
      title: i?.title,
      rating: i?.vote_average,
      genre: i?.genre_ids?.[0],
      poster: ['https://image.tmdb.org/t/p', 'w500', i?.poster_path].join('/'),
    })));
  } catch (e) {
    return [];
  }
};

const getPopular = async () => {
  return await fetchMovie('https://api.themoviedb.org/3/movie/popular');
};

const getNowPlaying = async () => {
  return await fetchMovie('https://api.themoviedb.org/3/movie/now_playing');
};

export default async function Home() {
  const [popular, nowPlaying]: [Movie[], Movie[]] = await Promise.all([getPopular(), getNowPlaying()]);
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
            {popular.slice(0, 5).map(i => <MovieNew key={i.id} item={i} />)}
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
            {nowPlaying.slice(0, 5).map(i => <MovieNew key={i.id} item={i} />)}
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



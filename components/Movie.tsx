import Image from 'next/image'
import Link from 'next/link'

const src = 'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg';

interface Movie {
  id: number,
  title: string,
  rating: number,
  genre: number,
  poster: string,
};

export const MovieNew = ({ item }: { item:Movie }) => {
  return (
    <Link className="w-[9.7rem]" href={`/movie/${item.id}`}>
      <div className="h-[7.8rem] mb-4 rounded-md w-[9.7rem] relative overflow-hidden">
        <Image
          alt="Image movie"
          fill
          priority
          sizes="9.7rem"
          style={{ objectFit: 'contain' }}
          src={item.poster} />
      </div>
      <h3 className="text-white text-sm text-ellipsis overflow-hidden">{item.title}</h3>
      <div className="flex items-center">
        <p className="mr-2 text-[0.625rem] text-white">{item.rating}</p>
        <p className="opacity-40 text-[0.6875rem] text-white">1h 45min | {item.genre}</p>
      </div>
    </Link>
  );
};

export const Movie = () => {
  return (
    <Link className="inline-block" href="/movie/120023">
      <div className="h-[7.8rem] mb-4 rounded-md w-[9.7rem] relative overflow-hidden">
        <Image
          alt="Image movie"
          fill
          priority
          sizes="9.7rem"
          style={{ objectFit: 'cover', objectPosition: '0 0' }}
          src={src} />
      </div>
      <h3 className="text-white text-sm">Matt Max: Fury Way</h3>
      <div className="flex items-center">
        <p className="mr-2 text-[0.625rem] text-white">7.5</p>
        <p className="opacity-40 text-[0.6875rem] text-white">1h 45min | action</p>
      </div>
    </Link>
  );
};

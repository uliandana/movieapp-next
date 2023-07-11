import Image from 'next/image';
import Link from 'next/link';
import { src } from '../app/page';

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

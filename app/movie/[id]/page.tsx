'use client'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import ic_back from '@/public/ic-back.svg'
import ic_share from '@/public/ic-share.svg'
import ic_bookmark from '@/public/ic-bookmark.svg'
import ic_play from '@/public/ic-play.svg'

const data = {
  title: 'Matt Max: Fury Way',
  rating: 7.5,
  year: 2019,
  duration: '1h 45min',
  genre: ['Action', 'Thriller', 'Drama'],
  description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod  aliquyam erat, sed diam volup... Read more',
  cast: [
    { role: 'Director', name: 'Anton Amir' },
    { role: 'Actor', name: 'Jennifer' },
    { role: 'Actor', name: 'Joanna' },
  ],
  similar: [
    { id: 2001, name: 'Matt Max: Fury Way', year: 2023 },
    { id: 1201, name: 'Matt Max: Fury Way', year: 2023 },
    { id: 9001, name: 'Matt Max: Fury Way', year: 2023 },
  ],
  recomendation: [
    { id: 2002, name: 'The Mitrix: Reloaded', year: 2023 },
    { id: 1202, name: 'The Mitrix: Reloaded', year: 2023 },
    { id: 9002, name: 'The Mitrix: Reloaded', year: 2023 },
  ],
}

export default function Movie() {
  const { back } = useRouter();
  const [menu, setMenu] = useState(0);
  const MENU = [
    { name: 'Similar', items: data.similar },
    { name: 'Recommendation', items: data.recomendation },
  ];
  return (
    <main className="bg-[#8FACB3] m-auto max-w-screen-md min-h-screen flex flex-col justify-between">
      <div className="p-6 flex items-center justify-between">
        <button className="bg-gray-700 rounded-md h-[1.875rem] w-[1.875rem] flex items-center justify-center" onClick={back}>
          <div className="h-[1.25rem] w-[1.25rem] relative">
            <Image alt="icon back" src={ic_back} fill sizes="1.25rem" style={{ objectFit: 'cover' }} />
          </div>
        </button>
        <button className="bg-gray-700 rounded-md h-[1.875rem] w-[1.875rem] flex items-center justify-center">
          <div className="h-[1.25rem] w-[1.25rem] relative">
            <Image alt="icon share" src={ic_share} fill sizes="1.25rem" style={{ objectFit: 'cover' }} />
          </div>
        </button>
      </div>
      <section className="bg-bg pb-10 max-h-[70vh] overflow-auto rounded-t-3xl sticky bottom-0">
        <header className="py-6 px-8 mb-2 text-center text-white">
          <h1 className="mb-4 text-2xl">{data.title}</h1>
          <div className="flex gap-2 items-center justify-center mb-2 text-sm">
            <p className="bg-white/10 py-1 px-2 rounded-md">{data.rating}</p>
            <p className="bg-white/10 py-1 px-2 rounded-md">{data.year}</p>
            <p className="bg-white/10 py-1 px-2 rounded-md">{data.duration}</p>
          </div>
          <ul className="flex gap-2 items-center justify-center mb-6">
            {data.genre.map((i, idx) => (
              <Fragment key={idx}>
                <li className="opacity-80 text-xs">{i}</li>
                {idx + 1 < data.genre.length && <span className="text-[0.625rem]">•</span>}
              </Fragment>
            ))}
          </ul>
          <div className="flex gap-2 items-stretch">
            <button className="flex-1 bg-gradient-to-r from-[#D702FB] to-[#1A54FF] px-4 py-2 rounded-md text-[0.9375rem]">
              Watch Trailer
            </button>
            <button className="bg-white p-4 rounded-md">
              <div className="h-[1rem] w-[1rem] relative">
                <Image alt="icon bookmark" src={ic_bookmark} fill sizes="1rem" style={{ objectFit: 'contain' }} />
              </div>
            </button>
          </div>
        </header>
        <section className="px-8 mb-8 text-white">
          <h2 className="mb-2">Description</h2>
          <p className="mb-3 text-[#7B9399] text-sm">{data.description}</p>
          <h2 className="mb-2 text-sm">Cast</h2>
          <div className="h-[3.25rem] overflow-hidden">
            <ul className="pb-4 flex gap-4 items-center overflow-auto whitespace-nowrap">
              {data.cast.map(i => (
                <li className="flex gap-2 items-center" key={i.name}>
                  <div className="bg-[#8FACB3] h-[3rem] w-[3rem] rounded-full" />
                  <div>
                    <p className="mb-1 text-[#7B9399] text-[0.6875rem]">{i.role}</p>
                    <p className="text-xs">{i.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="px-8 text-white">
          <div className="flex items-end mb-6">
            {MENU.map((i, idx) => (
              <button className={`px-2 py-1 text-[0.9375rem] ${idx === menu ? 'border-b border-[#D702FB]' : ''}`} key={i.name} onClick={() => setMenu(idx)}>
               {i.name}
             </button>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {MENU[menu].items.map(i => (
              <Link className="bg-[#1C1A2E] flex gap-4 items-center justify-between p-2 pr-4" key={i.id} href={`{/movie/${i.id}}`}>
                <div className="flex gap-4 items-center">
                  <div className="bg-[#8FACB3] h-[3.75rem] w-[3.75rem] rounded-md" />
                  <div>
                    <p className="text-sm">{i.name}</p>
                    <span className="bg-white/10 px-2 py-1 text-[0.625rem]">{i.year}</span>
                  </div>
                </div>
                <button className="bg-gray-700 rounded-full h-[2rem] w-[2rem] flex items-center justify-center">
                  <div className="h-[1rem] w-[1rem] relative">
                    <Image alt="icon play" src={ic_play} fill sizes="1rem" style={{ objectFit: 'cover' }} />
                  </div>
                </button>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

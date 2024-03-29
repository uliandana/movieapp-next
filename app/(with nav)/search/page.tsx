import { Movie } from '@/components/Movie';
import ic_search from '@/public/ic-search.svg'
import { Icon } from '@/components/Icon';

export default function Favorites() {
  return (
    <main className="bg-bg m-auto max-w-screen-md min-h-screen">
      <header className="flex items-center pt-10 px-6">
        <input
          className="bg-[#1C1A2E] block mr-2 text-sm p-4 rounded-md text-white w-full placeholder:text-[#6A7F84]"
          placeholder="What are you watching today"
          type="text"
        />
        <Icon alt="search" src={ic_search} size="1.5rem" fit="contain" />
      </header>
      <h1 className="py-4 px-6 text-base text-white">Popular Movies</h1>
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

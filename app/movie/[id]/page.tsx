export default function Movie({ params }: { params: { id: string } }) {
  const { id } = params
  return (
    <main className="bg-bg m-auto max-w-screen-md min-h-screen">
      <h1 className="py-8 px-6 text-lg text-white">Movie {id}</h1>
    </main>
  )
}

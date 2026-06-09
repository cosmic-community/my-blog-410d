import { getAllAuthors } from '@/lib/cosmic'
import AuthorCard from '@/components/AuthorCard'

export const metadata = {
  title: 'Authors - My Blog',
}

export default async function AuthorsPage() {
  const authors = await getAllAuthors()

  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Authors</h1>
      <p className="text-gray-600 mb-8">Meet the writers behind My Blog.</p>

      {authors.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">No authors found.</div>
      )}
    </div>
  )
}
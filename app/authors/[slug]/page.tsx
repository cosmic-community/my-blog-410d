// app/authors/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAuthorBySlug, getPostsByAuthor, getMetafieldValue } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) {
    notFound()
  }

  const posts = await getPostsByAuthor(author.id)
  const name = getMetafieldValue(author.metadata?.name) || author.title
  const bio = getMetafieldValue(author.metadata?.bio)
  const email = getMetafieldValue(author.metadata?.email)
  const avatar = author.metadata?.avatar

  return (
    <div className="container-page py-12">
      <Link
        href="/authors"
        className="inline-flex items-center gap-1 text-sm text-brand hover:text-brand-dark mb-6"
      >
        ← Back to Authors
      </Link>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {avatar ? (
          <img
            src={`${avatar.imgix_url}?w=240&h=240&fit=crop&auto=format,compress`}
            alt={name}
            width={120}
            height={120}
            className="w-28 h-28 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-brand-light flex items-center justify-center text-4xl flex-shrink-0">
            👤
          </div>
        )}
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-gray-900">{name}</h1>
          {bio && <p className="text-gray-600 mt-3">{bio}</p>}
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-block mt-4 text-sm text-brand hover:text-brand-dark"
            >
              {email}
            </a>
          )}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Posts by {name}</h2>
      {posts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">No posts by this author yet.</div>
      )}
    </div>
  )
}
// app/posts/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getMetafieldValue } from '@/lib/cosmic'

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const title = getMetafieldValue(post.metadata?.title) || post.title
  const content = getMetafieldValue(post.metadata?.content)
  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const category = post.metadata?.category
  const tags = post.metadata?.tags

  return (
    <article className="container-page py-12 max-w-3xl">
      <Link
        href="/posts"
        className="inline-flex items-center gap-1 text-sm text-brand hover:text-brand-dark mb-6"
      >
        ← Back to Posts
      </Link>

      {category && (
        <Link
          href={`/categories/${category.slug}`}
          className="inline-block text-xs font-semibold text-brand bg-brand-light px-2.5 py-1 rounded-full mb-4"
        >
          {getMetafieldValue(category.metadata?.name) || category.title}
        </Link>
      )}

      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">{title}</h1>

      {author && (
        <Link
          href={`/authors/${author.slug}`}
          className="inline-flex items-center gap-3 mb-8 group"
        >
          {author.metadata?.avatar && (
            <img
              src={`${author.metadata.avatar.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
              alt={getMetafieldValue(author.metadata?.name) || author.title}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
          )}
          <span className="text-sm font-medium text-gray-900 group-hover:text-brand transition-colors">
            {getMetafieldValue(author.metadata?.name) || author.title}
          </span>
        </Link>
      )}

      {featuredImage && (
        <div className="rounded-xl overflow-hidden mb-8 bg-gray-100">
          <img
            src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={title}
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {content && (
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-brand"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-gray-200">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
            >
              #{getMetafieldValue(tag)}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}
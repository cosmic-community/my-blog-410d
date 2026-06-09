import Link from 'next/link'
import type { Author } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface AuthorCardProps {
  author: Author
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const name = getMetafieldValue(author.metadata?.name) || author.title
  const bio = getMetafieldValue(author.metadata?.bio)
  const avatar = author.metadata?.avatar

  return (
    <Link
      href={`/authors/${author.slug}`}
      className="block bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg hover:border-brand transition-all duration-300 group"
    >
      {avatar ? (
        <img
          src={`${avatar.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
          alt={name}
          width={80}
          height={80}
          className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
        />
      ) : (
        <div className="w-20 h-20 rounded-full bg-brand-light flex items-center justify-center text-2xl mx-auto mb-4">
          👤
        </div>
      )}
      <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand transition-colors">
        {name}
      </h3>
      {bio && <p className="text-sm text-gray-600 mt-2 line-clamp-3">{bio}</p>}
    </Link>
  )
}
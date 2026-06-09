import Link from 'next/link'
import type { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-brand transition-all duration-300 group"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">🏷️</span>
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand transition-colors">
          {name}
        </h3>
      </div>
      {description && <p className="text-sm text-gray-600 line-clamp-3">{description}</p>}
    </Link>
  )
}
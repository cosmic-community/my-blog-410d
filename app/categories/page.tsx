import { getAllCategories } from '@/lib/cosmic'
import CategoryCard from '@/components/CategoryCard'

export const metadata = {
  title: 'Categories - My Blog',
}

export default async function CategoriesPage() {
  const categories = await getAllCategories()

  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Categories</h1>
      <p className="text-gray-600 mb-8">Explore posts grouped by topic.</p>

      {categories.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">No categories found.</div>
      )}
    </div>
  )
}
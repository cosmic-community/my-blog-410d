import Link from 'next/link'
import { getAllPosts, getAllCategories } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'
import CategoryCard from '@/components/CategoryCard'

export default async function HomePage() {
  const [posts, categories] = await Promise.all([getAllPosts(), getAllCategories()])

  const featuredPost = posts[0]
  const recentPosts = posts.slice(1, 7)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand to-brand-dark text-white">
        <div className="container-page py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Welcome to My Blog
          </h1>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
            A creative portfolio of stories, ideas, and inspiration from talented authors.
          </p>
          <Link
            href="/posts"
            className="inline-block mt-8 bg-white text-brand font-semibold px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Browse All Posts
          </Link>
        </div>
      </section>

      <div className="container-page py-12">
        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Post</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <PostCard post={featuredPost} />
              <div className="hidden md:flex items-center justify-center bg-brand-light rounded-xl p-8">
                <p className="text-brand-dark text-center font-medium">
                  Discover the latest stories from our community of writers.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Recent Posts */}
        {recentPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Posts</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Categories */}
        {categories.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Categories</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </section>
        )}

        {posts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No posts found. Add some posts in your Cosmic bucket to get started.
          </div>
        )}
      </div>
    </div>
  )
}
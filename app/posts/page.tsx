import { getAllPosts } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'

export const metadata = {
  title: 'All Posts - My Blog',
}

export default async function PostsPage() {
  const posts = await getAllPosts()

  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">All Posts</h1>
      <p className="text-gray-600 mb-8">Browse every story published on My Blog.</p>

      {posts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">No posts found.</div>
      )}
    </div>
  )
}
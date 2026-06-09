import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container-page">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
            <span className="text-2xl">📝</span>
            <span>My Blog</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="text-gray-600 hover:text-brand transition-colors">
              Home
            </Link>
            <Link href="/posts" className="text-gray-600 hover:text-brand transition-colors">
              Posts
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-brand transition-colors">
              Categories
            </Link>
            <Link href="/authors" className="text-gray-600 hover:text-brand transition-colors">
              Authors
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
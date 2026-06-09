import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-page py-32 text-center">
      <div className="text-6xl mb-4">📝</div>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-8">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="inline-block bg-brand text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors"
      >
        Go Home
      </Link>
    </div>
  )
}
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container-page py-8">
        <p className="text-center text-sm text-gray-500">
          &copy; {year} My Blog. Built with Cosmic.
        </p>
      </div>
    </footer>
  )
}
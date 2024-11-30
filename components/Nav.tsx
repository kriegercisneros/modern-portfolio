import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-90 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            JD
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#projects" className="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-900 dark:hover:text-white">
                Projects
              </Link>
              <Link href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-900 dark:hover:text-white">
                About
              </Link>
              <Link href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-900 dark:hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
import Image from 'next/image'
import { Inter } from 'next/font/google'
import ProfileImage from '@/components/ProfileImage'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Profile Image in upper right */}
      <div className="absolute top-8 right-8">
        <div className="w-32 h-32"> {/* Container to constrain ProfileImage size */}
          <ProfileImage />
        </div>
      </div>

      {/* Main content */}
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <h1 className="text-4xl font-bold">John Doe</h1>
          </div>
        </div>

        <div className="relative flex place-items-center">
          <h2 className="text-2xl">Full Stack Developer</h2>
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">
              Projects
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Check out my latest work and side projects.
            </p>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">
              About Me
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Learn more about my journey and skills.
            </p>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">
              Contact
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Get in touch for opportunities or collaboration.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
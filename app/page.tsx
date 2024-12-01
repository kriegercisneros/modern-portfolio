import Image from 'next/image'
import ProfileImage from '@/components/ProfileImage'

export default function Home() {
  return (
    <main className="min-h-screen relative p-4">
      {/* Header with profile image */}
      <div className="fixed top-4 right-4 z-50">
        <ProfileImage />
      </div>

      {/* Main content with adjusted padding to avoid image overlap */}
      <div className="pt-16 max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Your Name</h1>
          <h2 className="text-2xl mt-2">Full Stack Developer</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Your existing grid items */}
        </div>
      </div>
    </main>
  )
}
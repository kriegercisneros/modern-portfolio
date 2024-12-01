// components/ProfileImage.tsx
import Image from 'next/image'
import profileImage from '../public/images/DSC_6152.jpg'

export default function ProfileImage() {
  const imageSize = 300; // Increased from 128

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-72 h-72"> {/* Increased from w-32 h-32 to w-72 h-72 (288px) */}
        <div className="w-full h-full rounded-full overflow-hidden border-3 border-accent shadow-brutal">
          <Image
            src={profileImage}
            alt="Profile Picture"
            width={imageSize}
            height={imageSize}
            className="object-cover w-full h-full"
            quality={85}
            priority
          />
        </div>
      </div>
    </div>
  )
}
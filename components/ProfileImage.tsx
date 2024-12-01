// components/ProfileImage.tsx
import Image from 'next/image'
import profileImage from '../public/images/DSC_6152.jpg'

export default function ProfileImage() {
  const imageSize = 128;

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-32 h-32">
        <div className="w-full h-full rounded-full overflow-hidden border-3 border-accent shadow-brutal">
          <Image
            src={profileImage}
            alt="Profile Picture"
            width={imageSize}
            height={imageSize}
            className="object-cover"
            quality={85}
            priority
          />
        </div>
      </div>
    </div>
  )
}
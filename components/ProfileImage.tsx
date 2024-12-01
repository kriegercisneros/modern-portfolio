import Image from 'next/image'
import profileImage from '../public/images/DSC_6152.jpg'

export default function ProfileImage() {
  const imageSize = 256; // 32 * 4 for better quality on retina displays

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-64 h-64"> {/* Force GPU acceleration */}
        <div className="w-full h-full rounded-full overflow-hidden">
          <Image
            src={profileImage}
            alt="Profile Picture"
            width={imageSize}
            className="object-cover w-full h-full"
            quality={85}
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
    
  )
}
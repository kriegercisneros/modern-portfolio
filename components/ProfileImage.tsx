import Image from 'next/image'
import profileImage from '../public/images/DSC_6152.jpg'

export default function ProfileImage() {
  const imageSize = 128; // 32 * 4 for better quality on retina displays

  return (
    <div className="[transform:translateZ(0)] relative w-64"> {/* Force GPU acceleration */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <Image
          src={profileImage}
          alt="Profile Picture"
          width={imageSize}
          className="object-cover w-full h-full"
          quality={100}
          priority
          unoptimized
        />
      </div>
    </div>
  )
}
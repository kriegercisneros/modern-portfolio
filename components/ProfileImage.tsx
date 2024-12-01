import Image from 'next/image'
import profileImage from '../public/images/DSC_6152.jpg'

export default function ProfileImage() {
  return (
    <div className="relative w-24 h-24"> {/* Container with fixed size */}
      <Image
        src={profileImage}
        alt="Profile Picture"
        width={96}    // Specify exact width
        height={96}   // Specify exact height
        className="rounded-full object-cover"
        priority
        quality={90}
      />
    </div>
  )
}
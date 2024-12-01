import Image from 'next/image'
import profileImage from '../public/images/DSC_6152.jpg'

export default function ProfileImage() {
  return (
    <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden"> {/* Changed from w-64 h-64 to w-32 h-32 */}
      <Image
        src={profileImage}
        alt="Profile Picture"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        className="object-cover"
        quality={90}
      />
    </div>
  )
}
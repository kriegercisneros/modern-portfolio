import Image from 'next/image'
import profileImage from '../public/images/DSC_6152.jpg'

export default function ProfileImage() {
  return (
    <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden">
      <Image
        src={profileImage}  // Update this with your image filename
        alt="Profile Picture"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority  // Use this if the image is above the fold
        className="object-cover"
        quality={90}  // Adjust quality (default is 75)
      />
    </div>
  )
}
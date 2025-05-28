'use client'

import Image from 'next/image'
import { PlayButton } from '@/components/PlayButton'

import demoReelStill from '../../../public/images/DK_Demo Reel.webp'

export function Reel() {
  
  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-white flex items-center justify-center snap-start snap-always"
    >

    {/* Background Image */}
      <Image
        src={demoReelStill}
        alt="Demo Reel Still"
        className="object-cover h-screen w-full z-0"
      />
      
      {/* Play Button */}
      <div className="absolute z-20 top-120">
        <PlayButton onClick={() => {alert('ehhlo')}} />
      </div>
      </section>
    
  )
}
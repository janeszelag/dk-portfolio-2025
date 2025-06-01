'use client'

import Image from 'next/image'
import { useState } from 'react'

import { FullScreenVimeoDialog } from '@/components/FullScreenVimeoDialog'
import { PlayButton } from '@/components/PlayButton'

import demoReelStill from '../../../public/images/DK_Demo Reel.webp'

export function Reel() {

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const handleDialogOpen = () => {
    setIsDialogOpen(true)
  }
  const handleDialogClose = () => {
    setIsDialogOpen(false)
  }
  
  return (
    <section
      id="reel"
      className="relative h-screen w-full overflow-hidden bg-white flex items-center justify-center snap-start snap-always"
    >

    {/* Background Image */}
      <Image
        src={demoReelStill}
        alt="Demo Reel Still"
        className="object-cover h-screen w-full z-0"
      />
      
      {/* Play Button */}
      <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <PlayButton onClick={handleDialogOpen} />
        </div>
        {/* Full Screen Dialog */}
        <FullScreenVimeoDialog vimeoId={1088489771} open={isDialogOpen} onClose={handleDialogClose}/>
      </section>
    
  )
}
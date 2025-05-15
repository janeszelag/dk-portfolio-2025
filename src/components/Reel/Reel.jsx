import Image from 'next/image'
import { PlayButton } from '@/components/PlayButton'

import windowsImage from '../../../public/images/windows-background.webp'

export function Reel() {
  
  return (
    <section className="bg-gray-300 h-screen w-full overflow-hidden">
      {/* <PlayButton onClick={() => alert('Play button clicked!')} /> */}
      <Image src={windowsImage}  alt='' />
    </section>
  )
}
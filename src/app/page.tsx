'use client'

import { useEffect, useState, useRef } from "react"

import { Reel } from "@/components/Reel"
import { Contact } from "@/components/Contact"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef(null)


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])


  return (
    <main
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
      style={{ scrollBehavior: 'smooth' }}
    >
      {/* Loader Overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <span className="relative inline-block w-12 h-12 rotate-45 loader"></span>
        </div>
      )}

      {/* Swimming pool hero */}
      <section ref={containerRef} className="h-screen snap-start relative">
        <video
          className="w-full h-full object-cover"
          src="/videos/pool-animation.mp4"
          autoPlay
          loop
          muted
          playsInline
        />


        <div className="absolute top-0 left-0 p-4 z-30">
          <div className="flex flex-col text-neutral-600 font-bold">
            <span className="text-xl md:text-2xl">DAKOTA ARSENEAULT</span>
            <span className="text-base md:text-lg">VIDEO EDITOR</span>
            <span className="text-base md:text-lg">MOTION DESIGNER</span>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-30">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            COMING SOON......
          </h1>
        </div>
      </section>

      {/* Scrollable content */}

      < Reel />
      <Contact />
    </main>
  )
}

'use client'

import { useEffect, useState } from "react"
import { Reel } from "@/components/Reel"
import { Contact } from "@/components/Contact"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])


  return (
    <main className="flex flex-col relative">
      {/* Loader Overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <span className="relative inline-block w-12 h-12 rotate-45 loader"></span>
        </div>
      )}

      {/* 1. Full-screen video hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          src="/videos/pool-animation.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />

        {/* Top-left name */}
        <div
          className={`absolute top-0 left-0 p-4 z-10 transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col">
            <span className="text-neutral-600 text-xl md:text-2xl font-bold">
              DAKOTA ARSENEAULT
            </span>
            <span className="text-neutral-600 text-base md:text-lg font-bold">
              VIDEO EDITOR
            </span>
            <span className="text-neutral-600 text-base md:text-lg font-bold">
              MOTION DESIGNER
            </span>
          </div>
        </div>

        {/* Center “Coming soon” */}
        <div
          className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
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

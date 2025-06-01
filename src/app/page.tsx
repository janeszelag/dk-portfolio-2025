'use client'

import { useEffect, useState } from "react"

import { Reel } from "@/components/Reel"
import { Contact } from "@/components/Contact"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])


  return (
    <main
      className="h-screen overflow-y-scroll snap-y scroll-smooth snap-mandatory relative"
    >
      {/* Loader Overlay */}
      {/* {!isLoaded && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <span className="relative inline-block w-12 h-12 rotate-45 loader"></span>
        </div>
      )} */}
      <div className="fixed top-0 left-0 p-4 z-30">
        <div className="flex flex-col text-neutral-600 font-bold">
          <span className="text-xl md:text-2xl">DAKOTA ARSENEAULT</span>
          <span className="text-base md:text-lg">VIDEO EDITOR</span>
          <span className="text-base md:text-lg">MOTION DESIGNER</span>
        </div>
      </div>

      <div className="hidden md:block fixed top-0 right-0 w-full p-4 z-50">
        <div className="flex justify-end gap-3">
          <a
            href="#reel"
            className="text-neutral-400 text-lg md:text-xl font-bold hover:underline"
          >
            REEL
          </a>
          <a
            href="#about"
            className="text-neutral-400 text-lg md:text-xl font-bold hover:underline"
          >
            ABOUT
          </a>
          <a
            href="#contact"
            className="text-neutral-400 text-lg md:text-xl font-bold hover:underline"
          >
            CONTACT
          </a>
        </div>
      </div>

      <Hero />
      <Reel />
      <About />
      <Contact />
    </main>
  )
}

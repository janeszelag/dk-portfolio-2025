'use client'
import { Nav } from "@/components/Nav"
import { Reel } from "@/components/Reel"
import { Contact } from "@/components/Contact"
import { Hero } from "@/components/Hero"
// import { About } from "@/components/About"


export default function Home() {

  return (
    <main
      className="h-screen overflow-y-scroll snap-y scroll-smooth snap-mandatory relative"
    >
      <Nav />
      <Hero />
      <Reel />
      {/* <About /> */}
      <Contact />
    </main>
  )
}

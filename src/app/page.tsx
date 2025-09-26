'use client'
import { Nav } from "@/components/Nav"
import { Reel } from "@/components/Reel"
import { Contact } from "@/components/Contact"
import { Hero } from "@/components/Hero"
import { Work } from "@/components/Work"


export default function Home() {

  return (
    <main
      className="relative flex flex-col"
    >
      <Nav />
      <Hero />
      <Reel />
      <Work />
      <Contact />
    </main>
  )
}

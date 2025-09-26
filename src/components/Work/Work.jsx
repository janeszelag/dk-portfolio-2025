'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FullScreenVimeoDialog } from '@/components/FullScreenVimeoDialog'
import { PlayIcon } from '@/components/Icons/PlayIcon'

const selectedWork = [
  { id: 1106203639, title: 'Porsche | Taycan Boost', src: "/images/porsche-spot.jpg"  },
  { id: 1106210186, title: 'Happy Meal | Animal Blocks', src: "/images/animal-blocks.jpg"  },
  { id: 1106206236, title: "McDonald's | Lunch Tales", src: "/images/lunch-tales.jpg"  },
  { id: 1105959654, title: 'Koodo | CPO Campaign', src: "/images/koodo-spot.jpg"  },
  { id: 1106194885, title: 'San Pellegrino Essenza | Summer Feeling', src: "/images/san-pelligrino-spot.jpg"  },
  { id: 1106194003, title: 'TD Blue Jays | MVP Spotlight', src: "/images/blue-jays.jpg"  },
]


const logos = [
  { src: "/images/sickkids.svg", alt: "SickKids"},
  { src: "/images/porsche.svg", alt: "Porsche"},
  { src: "/images/mcdonalds.svg", alt: "McDonalds" },
  { src: "/images/koodo.svg", alt: "Koodo" },
  { src: "/images/sephora.svg", alt: "Sephora" },
  { src: "/images/canada-post.png", alt: "Canada Post" },
  { src: "/images/ago.png", alt: "AGO" },
  { src: "/images/san-pellegrino.svg", alt: "San Pellegrino" },
  { src: "/images/cooperators.png", alt: "Co-operators" },
]

export function Work() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState(null)

  const handleOpen = (id) => {
    setActiveId(id)
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  const activeTitle = selectedWork.find((s) => s.id === activeId)?.title || ''

  return (
        <section
          id="work"
          className="bg-white py-10 sm:py-28 min-h-dvh"
        >
          <div className="flex flex-col mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <header className="mb-6 sm:mb-10 self-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-center">
                Selected Work
              </h2>
              <p className="mt-2 text-sm text-neutral-500 sm:text-base">
                A handful of recent edits. Tap a thumbnail to play fullscreen.
              </p>
            </header>
    
            <ul
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              role="list"
            >
              {selectedWork.map(({ id, title, src }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => handleOpen(id)}
                    className="group relative block w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 transition hover:shadow-lg focus:outline-none"
                  >
                  <div className="relative aspect-video">
                    <Image
                      src={src}
                      alt={`${title} – thumbnail`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity group-hover:from-black/90" />

                    <figcaption className="absolute inset-x-0 bottom-0 z-10 p-4">
                      <h3 className="text-white/95 text-left text-base font-medium leading-snug sm:text-lg drop-shadow">
                        {title}
                      </h3>
                    </figcaption>

                    {/* Center play icon on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayIcon className="h-16 w-16 opacity-80" />
                    </div>
                  </div>

                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center h-full gap-6 px-4 pt-20 md:pt-44">
            <h2 className="text-2xl md:text-3xl font-semibold pb-6">Brand Partners</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 items-center justify-center max-w-6xl w-full">
              {logos.map(({ src, alt }) => (
                <img
                  key={alt}
                  src={src}
                  alt={alt}
                  className="h-12 sm:h-20 w-auto max-w-[120px] sm:max-w-[200px] mx-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
    
          {activeId !== null && (
            <FullScreenVimeoDialog
              vimeoId={activeId}
              open={open}
              onClose={handleClose}
              title={activeTitle}
            />
          )}
        </section>
  )
}


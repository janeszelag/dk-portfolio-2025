const logos = [
  { src: "/images/sickkids.svg", alt: "SickKids" },
  { src: "/images/porsche.svg", alt: "Porsche" },
  { src: "/images/mcdonalds.svg", alt: "McDonalds" },
  { src: "/images/koodo.svg", alt: "Koodo" },
  { src: "/images/sephora.svg", alt: "Sephora" },
  { src: "/images/canada-post.png", alt: "Canada Post" },
  { src: "/images/ago.png", alt: "AGO" },
  { src: "/images/san-pellegrino.svg", alt: "San Pellegrino" },
  { src: "/images/cooperators.png", alt: "Co-operators" },
]

export function Work() {
  return (
    <section id="work" className="bg-white h-screen snap-start snap-always">
      <div className="flex flex-col items-center justify-center h-full gap-6 px-4">
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
    </section>
  )
}


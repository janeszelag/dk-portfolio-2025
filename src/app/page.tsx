export default function Home() {
  return (
    <main className="flex flex-col">
      {/* 1. Full-screen video hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/pool-animation.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />

        {/* Top-left name */}
        <div className="absolute top-0 left-0 p-4 z-10">
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
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            COMING SOON......
          </h1>
        </div>
      </section>

      {/* 2. Scrollable content below */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="mb-2">Email: dakota@example.com</p>
        <p>Phone: (123) 456-7890</p>
        {/* …whatever else you need… */}
      </section>

      {/* 3. More sections as needed */}
      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-3xl font-semibold mb-4">Reel</h2>
        <p>Stay tuned for the full demo reel!</p>
      </section>
    </main>
  )
}

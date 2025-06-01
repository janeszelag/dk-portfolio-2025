export function Hero() {
  return (
      <section className="h-screen snap-start relative">
        <video
          className="w-full h-full object-cover"
          src="/videos/pool-animation.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 flex items-center justify-center z-30">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            COMING SOON......
          </h1>
        </div>
      </section>
  )
}
export function Hero() {
  return (

      <section id="hero" className="h-screen snap-start relative">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          {/* mobile first: only used if viewport ≤ 768px */}
          <source
              src="/videos/flashback_mobile.mp4"
              media="(max-width: 768px)"
              type="video/mp4"
            />
          {/* default for all other screens */}
          <source src="/videos/flashback_web.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Down Chevron */}
        <div onClick={()=> window.location.href = '#reel'} className="cursor-pointer absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="size-20 md:size-28"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </section>
  )
}
export default function Contacts() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src="/videos/pool-animation.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      {/* top-left name */}
      <div className="absolute top-0 left-0 pt-8 p-4 z-10">
        <div className="flex flex-col">
        <span className="text-neutral-600 text-2xl font-bold">DAKOTA ARSENEAULT</span>
        <span className="text-neutral-600 text-lg font-bold">VIDEO EDITOR</span>
        <span className="text-neutral-600 text-lg font-bold">MOTION DESIGNER</span>

        </div>
      </div>

      {/* center “Coming soon” */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white text-5xl font-bold">COMING SOON......</h1>
      </div>
  </div>
  )
}
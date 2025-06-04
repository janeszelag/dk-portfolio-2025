import { PlayIcon } from "@/components/Icons"

export function PlayButton({ onClick }) {
  return (
    <button
      className="group cursor-pointer transition-transform duration-200 hover:scale-105 hover:drop-shadow-md"
      onClick={onClick}
    >
      <PlayIcon className="fill-black size-16 md:size-32 hover:fill-gray-200 opacity-75" />
    </button>
  )
}
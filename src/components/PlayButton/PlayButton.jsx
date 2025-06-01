import { PlayIcon } from "@/components/Icons"

export function PlayButton({ onClick }) {
  return (
    <button
      className="cursor-pointer"
      onClick={onClick}
    >
      <PlayIcon />
    </button>
  )
}
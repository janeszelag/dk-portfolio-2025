import { PlayIcon } from '@/components/Icons';

export function PlayButton({ onClick }) {
  return (
    <button
      className="bg-white py-3 px-5 cursor-pointer rounded-full border border-gray-300"
      onClick={onClick}
    >
      <PlayIcon className="size-14 fill-gray-400" />
    </button>
  )
}
import { PlayIcon } from '@/components/Icons';

export function PlayButton({ onClick }) {
  return (
    <button
      className="bg-gray-500 text-white font-bold py-2 px-4 cursor-pointer rounded-full hover:bg-gray-700 transition duration-300"
      onClick={onClick}
    >
      <PlayIcon className="size-16 fill-white" />
    </button>
  )
}
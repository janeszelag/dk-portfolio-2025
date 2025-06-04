import Dialog from '@mui/material/Dialog'
import { VimeoPlayer } from '@/components/VimeoPlayer'
import { CloseIcon } from '@/components/Icons'
import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})

export function FullScreenVimeoDialog({ vimeoId, open, onClose }) {

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      slots={{
        transition: Transition
      }}
    >
      <div className="relative w-full h-full bg-black">
        <button
          onClick={onClose}
          className="absolute z-50 top-4 text-2xl right-4 group cursor-pointer transition-transform duration-200 hover:scale-120 hover:drop-shadow-md"
        >
          <CloseIcon className="fill-white size-10 md:size-12" />
        </button>
          <VimeoPlayer
            videoId={vimeoId}
            autoplay
          />
      </div>
    </Dialog>
  )
}

FullScreenVimeoDialog.propTypes = {
  vimeoId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
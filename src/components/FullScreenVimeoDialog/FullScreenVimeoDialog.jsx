import Dialog from '@mui/material/Dialog'
import { VimeoPlayer } from '@/components/VimeoPlayer'
import PropTypes from 'prop-types'



export function FullScreenVimeoDialog({ vimeoId, open, onClose }) {

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
    >
      <div className="relative w-full h-full bg-black">
        <button
          onClick={onClose}
          className="absolute z-50 top-4 text-2xl right-4 cursor-pointer text-pink-600"
        >
          Close
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
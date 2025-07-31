import PropTypes from 'prop-types'

export function VimeoPlayer({ videoId, autoplay = true }) {
  const autoplayParam = autoplay ? 'autoplay=1' : 'autoplay=0'

  return (
    <div className="w-full">
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?${autoplayParam}&autopause=0&quality=4K&title=0&byline=0&portrait=0`}
        className="absolute py-10 left-0 w-full h-full border-0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        allowFullScreen
        title="Vimeo Video"
      />
    </div>
  )
}

VimeoPlayer.propTypes = {
  videoId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  autoplay: PropTypes.bool,
}

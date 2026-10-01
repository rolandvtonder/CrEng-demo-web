import { useState } from 'react'
import { PlayIcon } from './HeroCards'

/** Shows a thumbnail; the YouTube player only loads once the visitor asks for it. */
export default function Video({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div>
      {playing ? (
        <div className="video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <button
          type="button"
          className="video"
          aria-label={`Play video: ${title}`}
          onClick={() => setPlaying(true)}
        >
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
          <PlayIcon />
        </button>
      )}
      <p className="video-title">{title}</p>
    </div>
  )
}

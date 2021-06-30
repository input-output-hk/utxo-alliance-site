import React, { useEffect, useRef } from 'react'

export const VideoPlayer = ({
  provider,
  embedId,
  poster,
  autoplay = false,
}) => {
  const playerEl = useRef(null)

  useEffect(() => {
    const plyrEl = playerEl.current?.querySelector('.player')

    if (
      typeof window === 'undefined' ||
      typeof document === 'undefined' ||
      !plyrEl
    ) {
      return
    }

    const Plyr = require('plyr')

    const player = new Plyr(plyrEl, {
      autoplay,
      controls: [
        'play-large',
        'play',
        'progress',
        'mute',
        'volume',
        'fullscreen',
      ],
      youtube: {
        noCookie: true,
        rel: 0,
        showinfo: 0,
        iv_load_policy: 3,
        modestbranding: 1,
      },
      vimeo: {
        byline: false,
        portrait: false,
        title: false,
        speed: false,
        transparent: false,
      },
    })

    player.poster = poster

    player.on('ready', () => {
      player.poster = poster
    })

    return () => {
      player?.destroy()
    }
  }, [provider, embedId, poster, autoplay])

  return (
    <div ref={playerEl} className="VideoPlayer">
      <div
        className="player"
        data-plyr-provider={provider}
        data-plyr-embed-id={embedId}
      ></div>
    </div>
  )
}

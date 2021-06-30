import React, { useEffect, useRef } from 'react'
import separatorImage from '../assets/images/separator-1.svg'

export const Video = ({ preTitle, title, provider, embedId, poster }) => {
  const playerEl = useRef(null)

  useEffect(() => {
    let player

    if (
      typeof window === 'undefined' ||
      typeof document === 'undefined' ||
      !playerEl.current
    ) {
      return
    }

    const Plyr = require('plyr')

    const plyrEl = playerEl.current.querySelector('.player')

    if (!plyrEl) {
      return
    }

    player = new Plyr(plyrEl, {
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
      if (player) {
        player.destroy()
      }
    }
  }, [poster])

  return (
    <section className="Video">
      <div className="Video__container">
        <div className="Video__col-1">
          <div className="Video__col-1-content">
            <h3 className="Video__pre-title">{preTitle}</h3>

            <h2 className="Video__title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 359.11 3.3"
                aria-hidden="true"
                focusable="false"
                role="presentation"
              >
                <line
                  x1="357.61"
                  y1="1.5"
                  x2="1.5"
                  y2="1.8"
                  style={{
                    fill: 'none',
                    stroke: '#c4aa60',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: 3,
                    strokeDasharray: '4,6',
                  }}
                />
              </svg>

              {title}
            </h2>
          </div>
        </div>

        <div className="Video__col-2">
          <div
            ref={playerEl}
            className="Video__player"
            aria-hidden="true"
            loading="lazy"
          >
            <img className="Video__player-background" src={poster} alt="" />

            <div
              className="player"
              data-plyr-provider={provider}
              data-plyr-embed-id={embedId}
            ></div>
          </div>
        </div>
      </div>

      <img
        className="Video__separator"
        src={separatorImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
    </section>
  )
}

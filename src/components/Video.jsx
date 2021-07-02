import React from 'react'
import separatorImage from '../assets/images/separator-1.svg'
import { VideoPlayer } from './VideoPlayer'
import { TransitionFadeInUp } from './TransitionFadeInUp'

export const Video = ({ id, preTitle, title, provider, embedId, poster }) => {
  return (
    <section id={id} className="Video">
      <div className="Video__container">
        <div className="Video__col-1">
          <div className="Video__col-1-content">
            <TransitionFadeInUp group>
              <h3 className="Video__pre-title" data-transition-element>
                {preTitle}
              </h3>

              <h2
                className="Video__title"
                data-transition-element
                data-transition-delay={250}
              >
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
            </TransitionFadeInUp>
          </div>
        </div>

        <div className="Video__col-2">
          <div className="Video__player">
            <img
              className="Video__player-background"
              src={poster}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />

            <VideoPlayer
              provider={provider}
              embedId={embedId}
              poster={poster}
            />
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

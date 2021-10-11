import React from 'react'
import { useVideoModal } from './VideoModal'
import headerShapes574wPng from '../assets/images/header-shapes-574w.png'
import headerShapes1435wPng from '../assets/images/header-shapes-1435w.png'
import headerShapes1894wPng from '../assets/images/header-shapes-1894w.png'
import headerShapes2870wPng from '../assets/images/header-shapes-2870w.png'
import headerShapes4305wPng from '../assets/images/header-shapes-4305w.png'
import headerShapes5740wPng from '../assets/images/header-shapes-5740w.png'

export const Header = ({ title, video }) => {
  const setVideoModal = useVideoModal()

  return (
    <header className="Header">
      <img
        className="Header__shape"
        src={headerShapes1894wPng}
        srcSet={`${headerShapes574wPng} 574w, ${headerShapes1435wPng} 1435w, ${headerShapes1894wPng} 1894w, ${headerShapes2870wPng} 2870w, ${headerShapes4305wPng} 4305w, ${headerShapes5740wPng} 5740w`}
        sizes="100vw"
        alt=""
        aria-hidden="true"
      />

      <div className="container">
        <h1 className="Header__title">{title}</h1>

        {video.provider && video.embedId && (
          <button
            className="Header__play-button"
            aria-label="Play Video"
            onClick={() => setVideoModal(video)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.14 102.15">
              <circle
                cx="51.07"
                cy="51.07"
                r="49.07"
                style={{
                  fill: '#c4aa60',
                  fillOpacity: 0.3,
                  stroke: '#c4aa60',
                  strokeWidth: 4,
                }}
              />
              <path
                d="M47.14,65.2h0l18.15-10.9h0a3.77,3.77,0,0,0,0-6.43h0L47.16,37h0A3.74,3.74,0,0,0,42,38.32a3.85,3.85,0,0,0-.5,1.84h0V62h0a3.75,3.75,0,0,0,3.79,3.71A3.7,3.7,0,0,0,47.14,65.2Z"
                style={{ fill: 'none', stroke: '#fff', strokeWidth: 4 }}
              />
            </svg>
          </button>
        )}
      </div>
    </header>
  )
}

import React, { createContext, useContext, useState } from 'react'
import { VideoPlayer } from './VideoPlayer'
import { CSSTransition } from 'react-transition-group'
import { enableMainScrollbar, disableMainScrollbar } from '../helpers'

const VideoModalContext = createContext()

export const useVideoModal = () => useContext(VideoModalContext)

const VideoModal = ({ provider, embedId, poster }) => {
  const setVideoModal = useVideoModal()

  const closeModal = () => setVideoModal(null)

  return (
    <div className="VideoModal" aria-modal={true} role="dialog" tabIndex={-1}>
      <div className="VideoModal__backdrop" onClick={closeModal}></div>

      <button
        className="VideoModal__close"
        aria-label="Close"
        onClick={closeModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 319.99 319.99"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M193.94,160,296.5,57.44l21.15-21.15a8,8,0,0,0,0-11.31L295,2.35a8,8,0,0,0-11.31,0L160,126.06,36.29,2.34A8,8,0,0,0,25,2.34L2.34,25a8,8,0,0,0,0,11.31L126.06,160,2.34,283.71a8,8,0,0,0,0,11.31L25,317.65a8,8,0,0,0,11.31,0L160,193.94,262.56,296.5l21.15,21.15a8,8,0,0,0,11.31,0L317.65,295a8,8,0,0,0,0-11.31Z"
          />
        </svg>
      </button>

      <div className="VideoModal__container">
        <VideoPlayer
          provider={provider}
          embedId={embedId}
          poster={poster}
          autoplay
        />
      </div>
    </div>
  )
}

export const VideoModalProvider = ({ children }) => {
  const [video, setVideo] = useState(null)

  return (
    <VideoModalContext.Provider value={setVideo}>
      {children}

      <CSSTransition
        in={!!(video?.provider && video?.embedId)}
        timeout={500}
        classNames="transition-video-modal"
        onEnter={disableMainScrollbar}
        onExited={enableMainScrollbar}
        mountOnEnter
        unmountOnExit
      >
        <VideoModal {...video} />
      </CSSTransition>
    </VideoModalContext.Provider>
  )
}

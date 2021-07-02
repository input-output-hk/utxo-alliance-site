import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSTransition } from 'react-transition-group'

gsap.registerPlugin(ScrollTrigger)

export const TransitionExpand = ({ expand, children }) => {
  const element = useRef(null)

  const onEnter = () => {
    const { width } = getComputedStyle(element.current)
    element.current.style.width = width
    element.current.style.position = `absolute`
    element.current.style.visibility = `hidden`
    element.current.style.height = `auto`

    const { height } = getComputedStyle(element.current)
    element.current.style.width = null
    element.current.style.position = null
    element.current.style.visibility = null
    element.current.style.height = 0

    // Force repaint to make sure the animation is triggered correctly.
    // eslint-disable-next-line no-unused-expressions
    getComputedStyle(element.current).height

    requestAnimationFrame(() => {
      element.current.style.height = height
    })
  }

  const onEntered = () => {
    element.current.style.height = `auto`
  }

  const onExit = () => {
    const { height } = getComputedStyle(element.current)
    element.current.style.height = height

    // Force repaint to make sure the animation is triggered correctly.
    // eslint-disable-next-line no-unused-expressions
    getComputedStyle(element.current).height

    requestAnimationFrame(() => {
      element.current.style.height = 0
    })
  }

  return (
    <CSSTransition
      in={expand}
      timeout={300}
      onEnter={onEnter}
      onEntered={onEntered}
      onExit={onExit}
      classNames="transition-expand"
    >
      <div ref={element} className="transition-expand">
        {children}
      </div>
    </CSSTransition>
  )
}

import React from 'react'
import { useState } from 'react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSTransition } from 'react-transition-group'

gsap.registerPlugin(ScrollTrigger)

export const TransitionFadeInUp = ({ group, children }) => {
  const scrollTrigger = useRef(null)
  const scrollTriggerEl = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (scrollTrigger.current) {
      scrollTrigger.current.kill()
    }

    if (group) {
      const elements = scrollTriggerEl.current.querySelectorAll(
        '[data-transition-element]'
      )

      elements.forEach((element) => {
        const delay = parseInt(element.dataset.transitionDelay)

        if (!isNaN(delay)) {
          gsap.set(element, { transitionDelay: `${delay}ms` })
        }
      })
    }

    scrollTrigger.current = ScrollTrigger.create({
      trigger: scrollTriggerEl.current,
      start: 'top 85%',
      end: 'top 85%',
      onEnter: () => setInView(true),
      once: true,
    })

    return () => {
      if (scrollTrigger.current) {
        scrollTrigger.current.kill()
      }
    }
  }, [group])

  return (
    <CSSTransition
      in={inView}
      timeout={1000}
      classNames={`${group ? 'group-' : ''}transition-fade-in-up`}
    >
      <div
        ref={scrollTriggerEl}
        className={`${group ? 'group-' : ''}transition-fade-in-up`}
      >
        {children}
      </div>
    </CSSTransition>
  )
}

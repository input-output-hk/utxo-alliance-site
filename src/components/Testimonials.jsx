import React, { useEffect, useRef } from 'react'
import backgroundImage from '../assets/images/background-pattern-2.jpg'
import separatorImage from '../assets/images/separator-3.svg'
import { TransitionFadeInUp } from './TransitionFadeInUp'

export const Testimonials = ({ id, title, quotes }) => {
  const sliderEl = useRef(null)
  const flkty = useRef(null)

  useEffect(() => {
    const flktyEl = sliderEl.current?.querySelector('.slider')

    if (
      typeof window === 'undefined' ||
      typeof document === 'undefined' ||
      quotes.length <= 1 ||
      !flktyEl
    ) {
      flkty.current?.destroy()
      flkty.current = null

      return
    }

    const Flickity = require('flickity')

    flkty.current = new Flickity(flktyEl, {
      prevNextButtons: false,
      pageDots: true,
    })

    return () => {
      flkty.current?.destroy()
      flkty.current = null
    }
  }, [quotes.length])

  return (
    <section id={id} className="Testimonials">
      <img
        className="Testimonials__background"
        src={backgroundImage}
        alt=""
        role="presentation"
        aria-hidden="true"
        loading="lazy"
      />

      <TransitionFadeInUp group>
        <div className="container">
          <h2 className="Testimonials__title" data-transition-element>
            {title}
          </h2>
        </div>

        {quotes && (
          <div
            ref={sliderEl}
            className="Testimonials__slider"
            data-transition-element
            data-transition-delay={250}
          >
            <div className="slider">
              {quotes.map(({ id, content, footer }) => {
                return (
                  <div key={id} className="Testimonials__slide">
                    <div className="container">
                      <blockquote className="Testimonials__quote">
                        <div
                          className="Testimonials__quote-content"
                          dangerouslySetInnerHTML={{ __html: content }}
                        />

                        {footer && (
                          <footer className="Testimonials__quote-footer">
                            &mdash; {footer}
                          </footer>
                        )}
                      </blockquote>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </TransitionFadeInUp>

      <img
        className="Testimonials__separator"
        src={separatorImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
    </section>
  )
}

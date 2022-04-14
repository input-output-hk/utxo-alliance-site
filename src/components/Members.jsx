import React, { useEffect, useRef } from 'react'
import { TransitionFadeInUp } from './TransitionFadeInUp'
import logoAlephium from '../assets/logos/logo-alephium.svg'
import logoCardano from '../assets/logos/logo-cardano.svg'
import logoDigibyte from '../assets/logos/logo-digibyte.svg'
import logoErgo from '../assets/logos/logo-ergo.svg'
import logoInputOutput from '../assets/logos/logo-input-output.svg'
import logoKomodo from '../assets/logos/logo-komodo.svg'
import logoNervos from '../assets/logos/logo-nervos.svg'
import logoTopl from '../assets/logos/logo-topl.svg'
import logoHorizon from '../assets/logos/logo-horizon.svg'
import logoWolfram from '../assets/logos/logo-wolfram.svg'

const membersLogos = [
  { logo: logoAlephium, link: 'https://alephium.org/' },
  { logo: logoCardano, link: 'https://cardano.org/' },
  { logo: logoDigibyte, link: 'https://digibyte.org/' },
  { logo: logoErgo, link: 'https://ergoplatform.org/' },
  { logo: logoInputOutput, link: 'http://iohk.io/' },
  { logo: logoKomodo, link: 'https://komodoplatform.com/' },
  { logo: logoNervos, link: 'https://www.nervos.org/' },
  { logo: logoTopl, link: 'https://www.topl.co/' },
  { logo: logoHorizon, link: 'https://horizenlabs.io/' },
  { logo: logoWolfram, link: 'https://www.wolframblockchainlabs.com/' }
]

const slides = [...membersLogos, ...membersLogos, ...membersLogos]

export const Members = ({ id, title, subtitle }) => {
  const sliderEl = useRef(null)
  const flkty = useRef(null)

  useEffect(() => {
    const flktyEl = sliderEl.current?.querySelector('.slider')

    if (
      typeof window === 'undefined' ||
      typeof document === 'undefined' ||
      !flktyEl
    ) {
      flkty.current?.destroy()
      flkty.current = null

      return
    }

    const Flickity = require('flickity')

    flkty.current = new Flickity(flktyEl, {
      prevNextButtons: false,
      pageDots: false,
      wrapAround: true,
      contain: true,
      autoPlay: 2000,
      pauseAutoPlayOnHover: false,
      selectedAttraction: 0.01,
      friction: 0.15,
      initialIndex: Math.floor(slides.length / 2),
    })

    return () => {
      flkty.current?.destroy()
      flkty.current = null
    }
  }, [])

  return (
    <section id={id} className="Members">
      <TransitionFadeInUp group>
        <div className="container">
          <h2 className="Members__title" data-transition-element>
            {title}
          </h2>

          <p
            className="Members__subtitle"
            data-transition-element
            data-transition-delay={250}
          >
            {subtitle}
          </p>
        </div>

        <div
          ref={sliderEl}
          className="Members__slider"
          data-transition-element
          data-transition-delay={500}
        >
          <div className="slider">
            {slides.map(({ logo, link }, index) => {
              return (
                <figure key={index} className="Members__slide">
                  <a href={link} target="_blank" rel="noreferrer noopener">
                    <img src={logo} alt="" />
                  </a>
                </figure>
              )
            })}
          </div>
        </div>
      </TransitionFadeInUp>
    </section>
  )
}

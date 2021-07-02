import React from 'react'
import { EcoSystem } from './EcoSystem'
import logoSymbolSvg from '../assets/images/logo-symbol.svg'
import iconElementSvg from '../assets/images/icon-element.svg'
import backgroundPattern1 from '../assets/images/background-pattern-1.jpg'
import backgroundPattern2 from '../assets/images/background-pattern-2.jpg'
import { TransitionFadeInUp } from './TransitionFadeInUp'

export const Members = ({ id, title, content }) => {
  return (
    <section id={id} className="Members">
      <div className="Members__col-1">
        <img
          className="Members__col-1-background"
          src={backgroundPattern2}
          alt=""
          role="presentation"
          aria-hidden="true"
          loading="lazy"
        />

        <div className="Members__col-1-content">
          <img className="Members__col-1-image" src={iconElementSvg} alt="" />

          <TransitionFadeInUp group>
            <h2 className="Members__col-1-title h1" data-transition-element>
              {title}
            </h2>

            <div
              className="Members__col-1-symbols"
              role="presentation"
              aria-hidden="true"
              data-transition-element
              data-transition-delay={250}
            >
              <img src={logoSymbolSvg} alt="" />
              <img src={logoSymbolSvg} alt="" />
            </div>

            <div
              className="Members__col-1-text"
              dangerouslySetInnerHTML={{ __html: content }}
              data-transition-element
              data-transition-delay={500}
            />
          </TransitionFadeInUp>
        </div>
      </div>

      <div className="Members__col-2">
        <img
          className="Members__col-2-background"
          src={backgroundPattern1}
          alt=""
          role="presentation"
          aria-hidden="true"
          loading="lazy"
        />

        <EcoSystem className="Members__col-2-image" />
      </div>
    </section>
  )
}

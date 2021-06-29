import React from 'react'
import logoSymbolSvg from '../assets/images/logo-symbol.svg'
import iconElementSvg from '../assets/images/icon-element.svg'
import ecoSystemSvg from '../assets/images/eco-system.svg'
import backgroundPattern1 from '../assets/images/background-pattern-1.jpg'
import backgroundPattern2 from '../assets/images/background-pattern-2.jpg'

export const Members = ({ title, content }) => {
  return (
    <section className="Members">
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

          <h2 className="Members__col-1-title h1">{title}</h2>

          <div
            className="Members__col-1-symbols"
            role="presentation"
            aria-hidden="true"
          >
            <img src={logoSymbolSvg} alt="" />
            <img src={logoSymbolSvg} alt="" />
          </div>

          <div
            className="Members__col-1-text"
            dangerouslySetInnerHTML={{ __html: content }}
          />
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

        <img className="Members__col-2-image" src={ecoSystemSvg} alt="" />
      </div>
    </section>
  )
}

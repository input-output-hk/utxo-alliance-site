import React from 'react'
import logoSymbolSvg from '../assets/images/logo-symbol.svg'
import iconElementSvg from '../assets/images/icon-element.svg'
import ecoSystemSvg from '../assets/images/eco-system.svg'
import backgroundImage1 from '../assets/images/background-pattern-1.jpg'
import backgroundImage2 from '../assets/images/background-pattern-2.jpg'

export const Members = () => {
  return (
    <section className="Members">
      <div className="Members__col-1">
        <img
          className="Members__col-1-background"
          src={backgroundImage2}
          alt=""
          role="presentation"
          aria-hidden="true"
          loading="lazy"
        />

        <div className="Members__col-1-content">
          <img className="Members__col-1-image" src={iconElementSvg} alt="" />

          <h2 className="Members__col-1-title h1">Members</h2>

          <div className="Members__col-1-symbols" role="presentation">
            <img src={logoSymbolSvg} alt="" />
            <img src={logoSymbolSvg} alt="" />
          </div>

          <p className="Members__col-1-text">
            We provide a forum for open dialogue between key stakeholders
            developing utxo based blockchains with a view to developing common
            tools and techniques to evolve the standard over time.
          </p>
        </div>
      </div>

      <div className="Members__col-2">
        <img
          className="Members__col-2-background"
          src={backgroundImage1}
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

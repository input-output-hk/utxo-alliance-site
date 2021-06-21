import React from 'react'
import backgroundImage from '../assets/images/background-pattern-1.jpg'
import separatorImage from '../assets/images/separator-3.svg'

export const Who = () => {
  return (
    <section className="Who">
      <img
        className="Who__background"
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />

      <div className="container">
        <h2 className="Who__title h1">Who we are</h2>

        <p className="Who__text">
          Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
          ut laoreet dolore.
        </p>
      </div>

      <img
        className="Who__separator"
        src={separatorImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
    </section>
  )
}

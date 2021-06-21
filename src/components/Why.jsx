import React from 'react'
import backgroundImage from '../assets/images/background-pattern-2.jpg'
import separatorImage from '../assets/images/separator-2.svg'

export const Why = () => {
  return (
    <section className="Why">
      <img
        className="Why__background"
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />

      <div className="container">
        <h2 className="Why__title h1">Why it matters</h2>

        <p className="Why__text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim.
        </p>
      </div>

      <img
        className="Why__separator"
        src={separatorImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
    </section>
  )
}

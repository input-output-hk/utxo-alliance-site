import React from 'react'
import backgroundImage from '../assets/images/background-pattern-1.jpg'
import separatorImage from '../assets/images/separator-1.svg'

export const What = () => {
  return (
    <section className="What">
      <img
        className="What__background"
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />

      <div className="container">
        <h2 className="What__title h1">What we do</h2>

        <p className="What__text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim.
        </p>
      </div>

      <img
        className="What__separator"
        src={separatorImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
    </section>
  )
}

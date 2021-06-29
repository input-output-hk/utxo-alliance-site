import React, { useEffect, useState } from 'react'
import backgroundPattern1 from '../assets/images/background-pattern-1.jpg'
import backgroundPattern2 from '../assets/images/background-pattern-2.jpg'
import separator1 from '../assets/images/separator-1.svg'
import separator2 from '../assets/images/separator-2.svg'
import separator3 from '../assets/images/separator-3.svg'

export const About = ({ styleType = 1, title, content }) => {
  const [backgroundImage, setBackgroundImage] = useState(backgroundPattern1)
  const [separatorImage, setSeparatorImage] = useState(separator1)

  useEffect(() => {
    if (styleType === 2) {
      setBackgroundImage(backgroundPattern1)
      setSeparatorImage(separator3)
      return
    }

    if (styleType === 3) {
      setBackgroundImage(backgroundPattern2)
      setSeparatorImage(separator2)
      return
    }

    setBackgroundImage(backgroundPattern1)
    setSeparatorImage(separator1)
  }, [styleType])

  return (
    <section className={`About About--${styleType}`}>
      <img
        className="About__background"
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />

      <div className="container">
        <h2 className="About__title h1">{title}</h2>

        <div
          className="About__content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      <img
        className="About__separator"
        src={separatorImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
    </section>
  )
}

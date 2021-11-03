import React from 'react'
import { TransitionFadeInUp } from './TransitionFadeInUp'
import joinShapeSvg from '../assets/images/join-shape.svg'
import separator4 from '../assets/images/separator-4.svg'

export const Join = ({ id, title, content }) => {
  return (
    <section id={id} className="Join">
      <TransitionFadeInUp group>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img className="Join__image" src={joinShapeSvg} alt="" />
            </div>

            <div className="col-lg-6">
              <h2 className="Join__title h1" data-transition-element>
                {title}
              </h2>

              <div
                className="Join__content"
                dangerouslySetInnerHTML={{ __html: content }}
                data-transition-element
                data-transition-delay={250}
              />
            </div>
          </div>
        </div>
      </TransitionFadeInUp>

      <img
        className="Join__separator"
        src={separator4}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
    </section>
  )
}

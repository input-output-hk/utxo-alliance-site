import React, { useState } from 'react'
import { Faq } from './Faq'
import { TransitionFadeInUp } from './TransitionFadeInUp'

export const Faqs = ({ id, title, items }) => {
  const [activeItem, setActiveItem] = useState(null)

  const handleClick = (id) => {
    if (activeItem === id) {
      setActiveItem(null)
      return
    }

    setActiveItem(id)
  }

  return (
    <section id={id} className="Faqs">
      <div className="container">
        <TransitionFadeInUp group>
          <h2 className="Faqs__title" data-transition-element>
            {title}
          </h2>

          {items && (
            <div data-transition-element data-transition-delay={250}>
              {items.map(({ id, title, content }) => (
                <Faq
                  key={id}
                  id={id}
                  title={title}
                  content={content}
                  open={activeItem === id}
                  onClick={handleClick}
                />
              ))}
            </div>
          )}
        </TransitionFadeInUp>
      </div>
    </section>
  )
}

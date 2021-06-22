import React, { useState } from 'react'
import { Faq } from './Faq'

export const Faqs = ({ title, items }) => {
  const [activeItem, setActiveItem] = useState(null)

  const handleClick = (id) => {
    setActiveItem(id)
  }

  return (
    <section className="Faqs">
      <div className="container">
        <h2 className="Faqs__title">{title}</h2>

        {items &&
          items.map(({ id, title, content }) => (
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
    </section>
  )
}

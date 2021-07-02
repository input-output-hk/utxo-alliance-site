import React from 'react'
import { TransitionExpand } from './TransitionExpand'

export const Faq = ({
  id,
  title,
  content,
  open = false,
  onClick = () => {},
}) => {
  return (
    <article className="Faq">
      <h3 className="Faq__title">
        <a
          href={`#${id}`}
          role="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={(event) => {
            event.preventDefault()

            onClick(id)
          }}
        >
          {title}
        </a>
      </h3>

      <TransitionExpand expand={open}>
        <div
          id={id}
          className="Faq__content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </TransitionExpand>
    </article>
  )
}

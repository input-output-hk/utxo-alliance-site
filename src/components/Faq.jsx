import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

export const Faq = ({
  id,
  title,
  content,
  open = false,
  onClick = () => {},
}) => {
  const contentEl = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (open && contentEl.current) {
      setHeight(contentEl.current.offsetHeight)
    } else {
      setHeight(0)
    }
  }, [open])

  return (
    <article className="Faq">
      <h3 className="Faq__title">
        <a
          href={`#${id}`}
          role="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => onClick(id)}
        >
          {title}
        </a>
      </h3>

      <div
        id={id}
        className="Faq__content-wrapper"
        style={{ height }}
        aria-hidden={!open}
      >
        <div
          ref={contentEl}
          className="Faq__content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </article>
  )
}

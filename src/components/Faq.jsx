import React, { useEffect, useRef, useState } from 'react'

export const Faq = ({
  id,
  title,
  content,
  open = false,
  onClick = () => {},
}) => {
  const contentEl = useRef(null)
  const [height, setHeight] = useState(null)

  useEffect(() => {
    if (open) {
      setHeight(contentEl.current?.offsetHeight)
    } else {
      setHeight(null)
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
          onClick={(event) => {
            event.preventDefault()

            onClick(id)
          }}
        >
          {title}
        </a>
      </h3>

      <div id={id} className="Faq__content-wrapper" style={{ height }}>
        <div
          ref={contentEl}
          className="Faq__content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </article>
  )
}

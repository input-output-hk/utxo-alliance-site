import React, { useCallback, useEffect, useRef, useState } from 'react'
import _debounce from 'lodash/debounce'

export const Faq = ({
  id,
  title,
  content,
  open = false,
  onClick = () => {},
}) => {
  const contentEl = useRef(null)
  const [height, setHeight] = useState(0)

  const updateHeightOnResize = useCallback(() => {
    console.log('updateHeightOnResize', open, contentEl.current.offsetHeight)

    if (!open || !contentEl.current) return

    setHeight(contentEl.current.offsetHeight)
  }, [open])

  useEffect(() => {
    if (open && contentEl.current) {
      setHeight(contentEl.current.offsetHeight)
    } else {
      setHeight(0)
    }
  }, [open])

  useEffect(() => {
    window.addEventListener('resize', _debounce(updateHeightOnResize, 100))

    return () =>
      window.removeEventListener('resize', _debounce(updateHeightOnResize, 100))
  }, [updateHeightOnResize])

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

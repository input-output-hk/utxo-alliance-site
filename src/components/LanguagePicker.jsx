import * as React from 'react'
import { Link } from 'gatsby'
import { useOnClickOutside } from '../hooks/useOnClickOutside'

export const LanguagePicker = ({ languages, current, root }) => {
  const [show, setShow] = React.useState(false)
  const ref = React.useRef()

  function onClick() {
    setShow(!show)
  }

  useOnClickOutside(ref, () => setShow(false))

  const langCurrent = languages.filter((lang) => lang.code === current.code)[0]
  const CurrentFlag = langCurrent.flag

  return (
    <div className={`dropdown languagepicker ${show ? 'show' : ''}`} ref={ref}>
      <button
        className="btn btn-secondary dropdown-toggle"
        onClick={onClick}
        type="button"
        aria-haspopup="true"
        aria-expanded="false"
        id="dropdownMenuLink"
      >
        {CurrentFlag} <span>{current.name}</span>
      </button>

      <div className={`dropdown-menu ${show ? 'show' : ''}`} aria-labelledby="dropdownMenuLink">
        {languages.map((lang) => {
          const href = lang.code === root ? '/' : `/${lang.code}/`
          return (
            <Link key={lang.name} to={href} className="dropdown-item">
              {lang.flag} <span>{lang.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

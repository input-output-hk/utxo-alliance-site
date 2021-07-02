import React from 'react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import logoSvg from '../assets/images/logo.svg'
import navBarSvg from '../assets/images/nav-bar.svg'

gsap.registerPlugin(ScrollToPlugin)

export const Navbar = ({ title, links }) => {
  // Detect if a link's href goes to the current page
  const getSamePageAnchor = (link) => {
    if (
      link.protocol !== window.location.protocol ||
      link.host !== window.location.host ||
      link.pathname !== window.location.pathname ||
      link.search !== window.location.search
    ) {
      return false
    }

    return link.hash
  }

  // Scroll to a given hash, preventing the event given if there is one
  function scrollToHash(hash, event) {
    const el = hash ? document.querySelector(hash) : false

    if (el) {
      if (event) event.preventDefault()

      gsap.to(window, {
        scrollTo: { y: el, autoKill: true },
        duration: 1,
        ease: 'power4.inOut',
      })
    }
  }

  const handleLinkClick = (event) =>
    scrollToHash(getSamePageAnchor(event.target), event)

  return (
    <nav className="Navbar">
      <img
        className="Navbar__background"
        src={navBarSvg}
        alt=""
        aria-hidden="true"
      />

      <img className="Navbar__logo" src={logoSvg} alt="logo" />

      <div className="container">
        {links && (
          <ul className="Navbar__links">
            {links.map(({ title, href, target }) => (
              <li key={title}>
                <a href={href} target={target} onClick={handleLinkClick}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}

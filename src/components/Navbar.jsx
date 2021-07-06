import React, { useState } from 'react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { CSSTransition } from 'react-transition-group'
import { disableMainScrollbar, enableMainScrollbar } from '../helpers'
import logoSvg from '../assets/images/logo.svg'
import navBarSvg from '../assets/images/nav-bar.svg'

gsap.registerPlugin(ScrollToPlugin)

export const Navbar = ({ title, links }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

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

      <button
        className="Navbar__modal-open"
        aria-label="Open Menu"
        onClick={openModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
          />
        </svg>
      </button>

      <CSSTransition
        in={isModalOpen}
        timeout={500}
        classNames="transition-navbar-modal"
        onEnter={disableMainScrollbar}
        onExited={enableMainScrollbar}
      >
        <div
          className="Navbar__modal transition-navbar-modal"
          aria-modal={isModalOpen ? true : undefined}
          role={isModalOpen ? 'dialog' : undefined}
          aria-hidden={isModalOpen ? undefined : true}
          tabIndex={-1}
        >
          <button
            className="Navbar__modal-close"
            aria-label="Close"
            onClick={closeModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 319.99 319.99"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M193.94,160,296.5,57.44l21.15-21.15a8,8,0,0,0,0-11.31L295,2.35a8,8,0,0,0-11.31,0L160,126.06,36.29,2.34A8,8,0,0,0,25,2.34L2.34,25a8,8,0,0,0,0,11.31L126.06,160,2.34,283.71a8,8,0,0,0,0,11.31L25,317.65a8,8,0,0,0,11.31,0L160,193.94,262.56,296.5l21.15,21.15a8,8,0,0,0,11.31,0L317.65,295a8,8,0,0,0,0-11.31Z"
              />
            </svg>
          </button>

          <div className="Navbar__modal-container">
            {links && (
              <ul className="Navbar__modal-links h1">
                {links.map(({ title, href, target }) => (
                  <li key={title}>
                    <a
                      href={href}
                      target={target}
                      onClick={(event) => {
                        closeModal()
                        handleLinkClick(event)
                      }}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </CSSTransition>
    </nav>
  )
}

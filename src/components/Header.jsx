import React from 'react'
import logoSvg from '../assets/images/logo.svg'
import navBarSvg from '../assets/images/nav-bar.svg'
import headerShapes765wPng from '../assets/images/header-shapes-765w.png'
import headerShapes1530wPng from '../assets/images/header-shapes-1530w.png'
import headerShapes2295wPng from '../assets/images/header-shapes-2295w.png'
import headerShapes3060wPng from '../assets/images/header-shapes-3060w.png'
// import headerShapesDesktop765wPng from '../assets/images/header-shapes-desktop-765w.png'
// import headerShapesDesktop1530wPng from '../assets/images/header-shapes-desktop-1530w.png'
// import headerShapesDesktop2295wPng from '../assets/images/header-shapes-desktop-2295w.png'
// import headerShapesDesktop3060wPng from '../assets/images/header-shapes-desktop-3060w.png'

export const Header = ({ title, links }) => {
  return (
    <header className="Header">
      <img
        className="Header__shape"
        src={headerShapes1530wPng}
        srcSet={`${headerShapes765wPng} 765w, ${headerShapes1530wPng} 1530w, ${headerShapes2295wPng} 2295w, ${headerShapes3060wPng} 3060w`}
        alt=""
        aria-hidden="true"
      />

      <nav className="Header__navbar">
        <img
          className="Header__navbar-background"
          src={navBarSvg}
          alt=""
          aria-hidden="true"
        />

        <img className="Header__navbar-logo" src={logoSvg} alt="logo" />

        <div className="container">
          {links && (
            <ul className="Header__navbar-links">
              {links.map(({ title, href, target }, index) => (
                <li
                  key={title}
                  style={{
                    marginRight:
                      index + 1 === Math.floor(links.length / 2)
                        ? 'auto'
                        : undefined,
                  }}
                >
                  <a href={href} target={target}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      <div className="container">
        <h1 className="Header__title">{title}</h1>
      </div>
    </header>
  )
}

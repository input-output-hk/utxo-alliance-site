import React from 'react'
import logoSvg from '../assets/images/logo.svg'
import navBarSvg from '../assets/images/nav-bar.svg'
import headerShapes765wPng from '../assets/images/header-shapes-765w.png'
import headerShapes1530wPng from '../assets/images/header-shapes-1530w.png'
import headerShapes2295wPng from '../assets/images/header-shapes-2295w.png'
import headerShapes3060wPng from '../assets/images/header-shapes-3060w.png'

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

        <button className="Header__play-button" onClick={() => {}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.14 102.15">
            <circle
              cx="51.07"
              cy="51.07"
              r="49.07"
              style={{
                fill: '#c4aa60',
                fillOpacity: 0.3,
                stroke: '#c4aa60',
                strokeWidth: 4,
              }}
            />
            <path
              d="M47.14,65.2h0l18.15-10.9h0a3.77,3.77,0,0,0,0-6.43h0L47.16,37h0A3.74,3.74,0,0,0,42,38.32a3.85,3.85,0,0,0-.5,1.84h0V62h0a3.75,3.75,0,0,0,3.79,3.71A3.7,3.7,0,0,0,47.14,65.2Z"
              style={{ fill: 'none', stroke: '#fff', strokeWidth: 4 }}
            />
          </svg>
        </button>
      </div>
    </header>
  )
}

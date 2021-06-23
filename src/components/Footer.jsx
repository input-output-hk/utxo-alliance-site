import React from 'react'
import logoSvg from '../assets/images/logo.svg'

export const Footer = ({ columns }) => {
  return (
    <footer className="Footer">
      <div className="container">
        <img className="Footer__logo" src={logoSvg} alt="logo" />

        {columns && (
          <div className="Footer__columns">
            {columns.map(({ title, links }) => (
              <article key={title} className="Footer__column">
                <h6 className="Footer__column-title">{title}</h6>

                {links && (
                  <ul className="Footer__column-links">
                    {links.map(({ title, href, target }) => (
                      <li key={title}>
                        <a href={href} target={target}>
                          {title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        )}
      </div>

      <div className="Footer__copyright">
        <div className="container">
          <p>&copy; 2021 UTXO Alliance. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

import React from 'react'

function Icon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" {...props}>
      <clipPath id="a">
        <path d="M0 0v30h60V0z"></path>
      </clipPath>
      <clipPath id="b">
        <path d="M30 15h30v15zv15H0zH0V0zV0h30z"></path>
      </clipPath>
      <g clipPath="url(#a)">
        <path fill="#012169" d="M0 0v30h60V0z"></path>
        <path stroke="#fff" strokeWidth="6" d="M0 0l60 30m0-30L0 30"></path>
        <path stroke="#C8102E" strokeWidth="4" d="M0 0l60 30m0-30L0 30" clipPath="url(#b)"></path>
        <path stroke="#fff" strokeWidth="10" d="M30 0v30M0 15h60"></path>
        <path stroke="#C8102E" strokeWidth="6" d="M30 0v30M0 15h60"></path>
      </g>
    </svg>
  )
}

export default Icon

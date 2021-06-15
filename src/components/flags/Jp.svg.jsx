import React from 'react'

function Icon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" {...props}>
      <path fill="#fff" d="M0 0H900V600H0z"></path>
      <circle cx="450" cy="300" r="180" fill="#bc002d"></circle>
    </svg>
  )
}

export default Icon

import React from 'react'

export const Button = ({
  component = 'button',
  children,
  disabled = false,
  href,
  target,
  type,
  onClick,
}) => {
  let ButtonComponent = component
  let buttonProps = {}

  if (ButtonComponent === 'button' && href) {
    ButtonComponent = 'a'

    buttonProps.href = href

    if (target) {
      buttonProps.target = target
      buttonProps.rel = 'noreferrer noopener'
    }
  }

  if (ButtonComponent === 'button') {
    buttonProps.type = type === undefined ? 'button' : type
    buttonProps.onClick = onClick
    buttonProps.disabled = disabled
  } else {
    if (ButtonComponent !== 'a' || !href) {
      buttonProps.role = 'button'
    }

    buttonProps['aria-disabled'] = disabled
  }

  return (
    <ButtonComponent className="Button" {...buttonProps}>
      {children}
    </ButtonComponent>
  )
}

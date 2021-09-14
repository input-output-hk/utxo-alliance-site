import React from 'react'

export const TextField = ({
  id,
  label,
  errorMessage,
  type = 'text',
  multiline = false,
  ...props
}) => {
  let TextFieldComponent = 'input'
  let textFieldProps = {}

  if (multiline) {
    TextFieldComponent = 'textarea'

    textFieldProps.rows = 4
  } else {
    textFieldProps.type = type
  }

  return (
    <div className="TextField">
      {label && (
        <label className="TextField__label visually-hidden" htmlFor={id}>
          {label}
        </label>
      )}

      <TextFieldComponent
        className={`TextField__input ${errorMessage ? 'is-invalid' : null}`}
        id={id}
        placeholder={label}
        {...textFieldProps}
        {...props}
      />

      {errorMessage && (
        <div className="TextField__error-message">{errorMessage}</div>
      )}
    </div>
  )
}

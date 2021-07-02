import React, { useState } from 'react'
import axios from 'axios'
import { Button } from './Button'
import { TextField } from './TextField'
import backgroundImage from '../assets/images/background-pattern-1.jpg'
import { TransitionFadeInUp } from './TransitionFadeInUp'

const stripHtml = (html) => {
  var temporalDivElement = document.createElement('div')
  temporalDivElement.innerHTML = html
  return temporalDivElement.textContent || temporalDivElement.innerText || ''
}

const validateEmail = (email) => {
  const re =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const validateField = ({ input, name, value }) => {
  switch (name) {
    case 'email':
      if (value.length > 0 && validateEmail(value)) {
        input.classList.remove('is-invalid')
        return false
      } else {
        input.classList.add('is-invalid')
        return true
      }
    default:
      if (value.length > 0) {
        input.classList.remove('is-invalid')
        return false
      } else {
        input.classList.add('is-invalid')
        return true
      }
  }
}

export const Form = ({ id, title, content, labels }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    validateField({
      input: event.target,
      name: event.target.getAttribute('name'),
      value: stripHtml(event.target.value).trim(),
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setIsSubmitting(true)

    const inputs = [...event.target.querySelectorAll('[name]')].map(
      (input) => ({
        input,
        name: input.getAttribute('name'),
        value: stripHtml(input.value).trim(),
      })
    )

    const errors = inputs.map(validateField).filter((error) => error)

    if (errors.length) {
      setIsSubmitting(false)

      return
    }

    try {
      await axios.post('hubspot form link here', {
        fields: inputs.map(({ name, value }) => ({ name, value })),
      })

      setTimeout(() => {
        event.target.reset()
        setIsSubmitting(false)
      }, 5000)
    } catch (error) {
      console.error({ error })
      setIsSubmitting(false)
    }
  }

  return (
    <section id={id} className="Form">
      <img
        className="Form__background"
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />

      <div className="container">
        <TransitionFadeInUp group>
          <h2 className="Form__title h1" data-transition-element>
            {title}
          </h2>

          <div
            className="Form__content"
            dangerouslySetInnerHTML={{ __html: content }}
            data-transition-element
            data-transition-delay={250}
          />

          <form
            className="Form__form"
            onSubmit={handleSubmit}
            data-transition-element
            data-transition-delay={500}
          >
            <div className="row">
              <div className="col-md-6">
                <TextField
                  id={`${id}-name`}
                  name="name"
                  label={labels.name}
                  onBlur={handleChange}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <TextField
                  id={`${id}-company`}
                  name="company"
                  label={labels.company}
                  onBlur={handleChange}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <TextField
                  id={`${id}-email`}
                  name="email"
                  type="email"
                  label={labels.email}
                  onBlur={handleChange}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <TextField
                  id={`${id}-role`}
                  name="role"
                  label={labels.role}
                  onBlur={handleChange}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <TextField
                  id={`${id}-textbox1`}
                  name="textbox1"
                  label={labels.textbox1}
                  multiline
                  onBlur={handleChange}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <TextField
                  id={`${id}-textbox2`}
                  name="textbox2"
                  label={labels.textbox2}
                  multiline
                  onBlur={handleChange}
                  onChange={handleChange}
                />
              </div>

              <div className="col">
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </TransitionFadeInUp>
      </div>
    </section>
  )
}

import React, { useState, useRef } from 'react'
import axios from 'axios'
import { Formik, Form as FormikForm, useField } from 'formik'
import * as Yup from 'yup'
import { Button } from './Button'
import { TextField } from './TextField'
import backgroundImage from '../assets/images/background-pattern-1.jpg'
import { TransitionFadeInUp } from './TransitionFadeInUp'
import { TransitionExpand } from './TransitionExpand'

const FormikTextField = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props)

  return (
    <TextField
      label={label}
      errorMessage={meta.touched && meta.error ? meta.error : null}
      {...field}
      {...props}
    />
  )
}

export const Form = ({ id, title, content, labels }) => {
  const [formStatus, setFormStatus] = useState(null)
  const [showMessage, setShowMessage] = useState(false)
  const showMessageTimeout = useRef(null)

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

          <Formik
            initialValues={{
              firstname: '',
              lastname: '',
              company: '',
              email: '',
              title_and_role_in_the_project: '',
              why_do_you_want_to_join_the_utxo_alliance_: '',
              how_or_what_would_you_contribute_to_the_utxo_alliance_: '',
            }}
            validationSchema={Yup.object({
              firstname: Yup.string().required('Required'),
              lastname: Yup.string().required('Required'),
              company: Yup.string().required('Required'),
              email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
              title_and_role_in_the_project: Yup.string().required('Required'),
              why_do_you_want_to_join_the_utxo_alliance_:
                Yup.string().required('Required'),
              how_or_what_would_you_contribute_to_the_utxo_alliance_:
                Yup.string().required('Required'),
            })}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              clearTimeout(showMessageTimeout.current)

              setShowMessage(false)

              const fields = Object.entries(values).map(([key, value]) => ({
                name: key,
                value,
              }))

              try {
                const response = await axios.post(
                  'https://api.hsforms.com/submissions/v3/integration/submit/8848114/2ee9cecc-f90d-4154-80de-e323c9c4ec33',
                  { fields }
                )

                console.log('response:', response)

                if (response.status === 200) {
                  setFormStatus({
                    success: true,
                    message: response.data.inlineMessage,
                  })

                  setShowMessage(true)

                  resetForm()
                } else {
                  setFormStatus({
                    success: false,
                    message: "Sorry, we couldn't submit the form.",
                  })

                  setShowMessage(true)
                }
              } catch (error) {
                console.log('error:', error)

                setFormStatus({
                  success: false,
                  message: "Sorry, we couldn't submit the form.",
                })

                setShowMessage(true)
              }

              showMessageTimeout.current = setTimeout(() => {
                setShowMessage(false)
              }, 10000)

              setSubmitting(false)
            }}
          >
            {({ isSubmitting }) => (
              <FormikForm
                className="Form__form"
                data-transition-element
                data-transition-delay={500}
              >
                <div className="row">
                  <div className="col-md-6">
                    <FormikTextField
                      id={`${id}-firstname`}
                      name="firstname"
                      label={labels.firstname}
                    />
                  </div>

                  <div className="col-md-6">
                    <FormikTextField
                      id={`${id}-lastname`}
                      name="lastname"
                      label={labels.lastname}
                    />
                  </div>

                  <div className="col-md-6">
                    <FormikTextField
                      id={`${id}-company`}
                      name="company"
                      label={labels.company}
                    />
                  </div>

                  <div className="col-md-6">
                    <FormikTextField
                      id={`${id}-email`}
                      name="email"
                      type="email"
                      label={labels.email}
                    />
                  </div>

                  <div className="col-md-12">
                    <FormikTextField
                      id={`${id}-title_and_role_in_the_project`}
                      name="title_and_role_in_the_project"
                      label={labels.title_and_role_in_the_project}
                    />
                  </div>

                  <div className="col-md-6">
                    <FormikTextField
                      id={`${id}-why_do_you_want_to_join_the_utxo_alliance_`}
                      name="why_do_you_want_to_join_the_utxo_alliance_"
                      label={labels.why_do_you_want_to_join_the_utxo_alliance_}
                      multiline
                    />
                  </div>

                  <div className="col-md-6">
                    <FormikTextField
                      id={`${id}-how_or_what_would_you_contribute_to_the_utxo_alliance_`}
                      name="how_or_what_would_you_contribute_to_the_utxo_alliance_"
                      label={
                        labels.how_or_what_would_you_contribute_to_the_utxo_alliance_
                      }
                      multiline
                    />
                  </div>

                  <div className="col">
                    <Button type="submit" disabled={isSubmitting}>
                      Submit
                    </Button>
                  </div>

                  <div className="col-12">
                    <TransitionExpand expand={showMessage}>
                      <div
                        className={`Form__form__message ${
                          formStatus?.success ? 'success' : 'error'
                        }`}
                        dangerouslySetInnerHTML={{
                          __html: formStatus?.message,
                        }}
                      />
                    </TransitionExpand>
                  </div>
                </div>
              </FormikForm>
            )}
          </Formik>
        </TransitionFadeInUp>
      </div>
    </section>
  )
}

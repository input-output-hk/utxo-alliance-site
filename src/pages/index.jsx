import React from 'react'
import { Layout } from '../components/Layout'
import { injectIntl } from 'gatsby-plugin-intl'
import { graphql } from 'gatsby'
import { About } from '../components/About'
import { Testimonials } from '../components/Testimonials'
import { Members } from '../components/Members'
import { Video } from '../components/Video'
import { Faqs } from '../components/Faqs'
import { Form } from '../components/Form'
import picturesElementPng from '../assets/images/pictures-element.png'
import videoPosterJpg from '../assets/images/video-poster.jpg'

// markup
const IndexPage = ({ intl, data }) => {
  return (
    <Layout data={data}>
      <div className="pictures-element">
        <About
          styleType={1}
          title={intl.formatMessage({ id: 'who.title' })}
          content={intl.formatMessage({ id: 'who.content' })}
        />

        <About
          styleType={3}
          title={intl.formatMessage({ id: 'what.title' })}
          content={intl.formatMessage({ id: 'what.content' })}
        />

        <About
          styleType={1}
          title={intl.formatMessage({ id: 'why.title' })}
          content={intl.formatMessage({ id: 'why.content' })}
        />

        <img
          className="pictures-element__image"
          src={picturesElementPng}
          alt=""
        />
      </div>

      <Testimonials
        title={intl.formatMessage({ id: 'testimonials.title' })}
        quotes={[
          ...Array(
            parseInt(intl.formatMessage({ id: 'testimonials.quotes.length' }))
          ).keys(),
        ].map((item) => ({
          id: item,
          content: intl.formatMessage({
            id: `testimonials.quotes.${item}.content`,
          }),
          footer: intl.formatMessage({
            id: `testimonials.quotes.${item}.footer`,
          }),
        }))}
      />

      <Members
        title={intl.formatMessage({ id: 'members.title' })}
        content={intl.formatMessage({ id: 'members.content' })}
      />

      <Video
        preTitle={intl.formatMessage({ id: 'video.preTitle' })}
        title={intl.formatMessage({ id: 'video.title' })}
        provider={intl.formatMessage({ id: 'video.provider' })}
        embedId={intl.formatMessage({ id: 'video.embedId' })}
        poster={videoPosterJpg}
      />

      <Faqs
        title={intl.formatMessage({ id: 'faqs.title' })}
        items={[
          ...Array(
            parseInt(intl.formatMessage({ id: 'faqs.items.length' }))
          ).keys(),
        ].map((item) => ({
          id: `faqs-item-${item}`,
          title: intl.formatMessage({ id: `faqs.items.${item}.title` }),
          content: intl.formatMessage({ id: `faqs.items.${item}.content` }),
        }))}
      />

      <Form
        id="join-the-alliance"
        title={intl.formatMessage({ id: 'form.title' })}
        content={intl.formatMessage({ id: 'form.content' })}
        labels={{
          name: intl.formatMessage({ id: 'form.labels.name' }),
          company: intl.formatMessage({ id: 'form.labels.company' }),
          email: intl.formatMessage({ id: 'form.labels.email' }),
          role: intl.formatMessage({ id: 'form.labels.role' }),
          textbox1: intl.formatMessage({ id: 'form.labels.textbox1' }),
          textbox2: intl.formatMessage({ id: 'form.labels.textbox2' }),
        }}
      />
    </Layout>
  )
}

export default injectIntl(IndexPage)

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

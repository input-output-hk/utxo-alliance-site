import React from 'react'
import { Layout } from '../components/Layout'
import { injectIntl } from 'gatsby-plugin-intl'
import { graphql } from 'gatsby'
import { About } from '../components/About'
import { Members } from '../components/Members'
import { Faqs } from '../components/Faqs'
import { Form } from '../components/Form'
import picturesElementPng from '../assets/images/pictures-element.png'

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
          styleType={2}
          title={intl.formatMessage({ id: 'why.title' })}
          content={intl.formatMessage({ id: 'why.content' })}
        />

        <img
          className="pictures-element__image"
          src={picturesElementPng}
          alt=""
        />
      </div>

      <Members
        title={intl.formatMessage({ id: 'members.title' })}
        content={intl.formatMessage({ id: 'members.content' })}
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
        title={intl.formatMessage({ id: 'join.title' })}
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

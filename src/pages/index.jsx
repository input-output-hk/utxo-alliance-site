import React from 'react'
import { Layout } from '../components/Layout'
import { injectIntl } from 'gatsby-plugin-intl'
import { graphql } from 'gatsby'
import { What } from '../components/What'
import { Why } from '../components/Why'
import { Who } from '../components/Who'
import { Members } from '../components/Members'
import { Faqs } from '../components/Faqs'
import picturesElementPng from '../assets/images/pictures-element.png'

// markup
const IndexPage = ({ intl, data }) => {
  return (
    <Layout data={data}>
      <div className="pictures-element">
        <img
          className="pictures-element__image"
          src={picturesElementPng}
          alt=""
        />

        <What />
        <Why />
        <Who />
      </div>

      <Members />

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

import React from 'react'
import { Layout } from '../components/Layout'
import { injectIntl } from 'gatsby-plugin-intl'
import { graphql } from 'gatsby'

// markup
const IndexPage = ({ intl, data }) => {

  return (
    <Layout data={data}>
      <h1>Home - { intl.formatMessage({ id: 'title' }) }</h1>
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

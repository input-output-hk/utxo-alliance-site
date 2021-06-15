import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout'
import { useIntl } from "gatsby-plugin-intl"

// markup
const NotFoundPage = ({ data }) => {
  const intl = useIntl()
  return (
    <Layout data={data}>
      <h1>{intl.title} 404</h1>
    </Layout>
  )
}

export default NotFoundPage

export const query = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

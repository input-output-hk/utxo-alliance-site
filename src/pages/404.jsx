import React from 'react'
import { graphql } from 'gatsby'
import { injectIntl } from 'gatsby-plugin-intl'
import { Layout } from '../components/Layout'

// markup
const NotFoundPage = ({ intl, data }) => {
  return (
    <Layout data={data}>
      <div className="NotFoundPage">
        <div className="container">
          <h1 className="NotFoundPage__title">
            {intl.formatMessage({ id: 'page404.title' })}
          </h1>

          <div
            className="NotFoundPage__content"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: 'page404.content' }),
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default injectIntl(NotFoundPage)

export const query = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

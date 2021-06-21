import React from 'react'
import { Layout } from '../components/Layout'
import { injectIntl } from 'gatsby-plugin-intl'
import { graphql } from 'gatsby'
import { What } from '../components/What'
import { Why } from '../components/Why'
import { Who } from '../components/Who'

// markup
const IndexPage = ({ intl, data }) => {
  return (
    <Layout data={data}>
      <hr />

      <What />
      <Why />
      <Who />

      <div className="container">
        {/* <h1>Home - {intl.formatMessage({ id: 'title' })}</h1> */}

        <h2>Members</h2>

        <p>
          We provide a forum for open dialogue between key stakeholders
          developing utxo based blockchains with a view to developing common
          tools and techniques to evolve the standard over time.
        </p>

        <hr />

        <span>6 minutes video</span>

        <h3>Deep dive into the UTXO Alliance</h3>

        <hr />

        <h4>FREQUENTLY asked QUESTIONS</h4>

        <h5>What does “UTXO” mean?</h5>
        <h5>Why “alliance?”</h5>
        <h5>What benefit does membership offer for individuals?</h5>
        <h5>What’s in it for companies and institutions?</h5>

        <hr />

        <h2>Join the alliance</h2>
      </div>

      <hr />
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

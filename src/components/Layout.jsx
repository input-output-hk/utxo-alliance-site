import React, { Fragment } from 'react'
import '../scss/styles.scss'
import { useIntl } from 'gatsby-plugin-intl'
import { Helmet } from 'react-helmet'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const Layout = ({ children, data }) => {
  const intl = useIntl()

  const title = intl.formatMessage({ id: 'title' })
  const metaDescription = intl.formatMessage({ id: 'meta.description' })
  const ogImage = `${data.site.siteMetadata.siteUrl}/og-image.jpg`

  return (
    <Fragment>
      <Helmet htmlAttributes={{ lang: intl.locale }}>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`${data.site.siteMetadata.siteUrl}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta
          property="og:url"
          content={`${data.site.siteMetadata.siteUrl}/`}
        />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
        {/* <meta name="twitter:site" content="" /> */}
      </Helmet>

      <main className="main-wrapper">
        <Header
          title={intl.formatMessage({ id: `header.title` })}
          links={[
            ...Array(
              parseInt(intl.formatMessage({ id: `header.links.length` }))
            ).keys(),
          ].map((link) => ({
            title: intl.formatMessage({ id: `header.links.${link}.title` }),
            href: intl.formatMessage({ id: `header.links.${link}.href` }),
            target: intl.formatMessage({ id: `header.links.${link}.target` }),
          }))}
        />

        {children}

        <Footer
          columns={[
            ...Array(
              parseInt(intl.formatMessage({ id: 'footer.columns.length' }))
            ).keys(),
          ].map((column) => ({
            title: intl.formatMessage({ id: `footer.columns.${column}.title` }),
            links: [
              ...Array(
                parseInt(
                  intl.formatMessage({
                    id: `footer.columns.${column}.links.length`,
                  })
                )
              ).keys(),
            ].map((link) => ({
              title: intl.formatMessage({
                id: `footer.columns.${column}.links.${link}.title`,
              }),
              href: intl.formatMessage({
                id: `footer.columns.${column}.links.${link}.href`,
              }),
              target: intl.formatMessage({
                id: `footer.columns.${column}.links.${link}.target`,
              }),
            })),
          }))}
        />
      </main>
    </Fragment>
  )
}

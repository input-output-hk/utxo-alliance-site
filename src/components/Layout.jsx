import React, { Fragment } from 'react'
import '../scss/styles.scss'
import { useIntl } from 'gatsby-plugin-intl'
import { Helmet } from 'react-helmet'
import { LanguagePicker } from '../components/LanguagePicker'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import Us from '../components/flags/Us.svg'
import Jp from '../components/flags/Jp.svg'

export const Layout = ({ children, data }) => {
  const intl = useIntl()

  const ogImage = data.site.siteMetadata.siteUrl + '/iog-fb-og2.jpg'

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{intl.formatMessage({ id: 'title' })}</title>
        {/* <meta name="description" content={intl.formatMessage({ id: 'meta_desc' })} /> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={intl.formatMessage({ id: 'title' })}
        />
        {/* <meta property="og:description" content={intl.formatMessage({ id: 'meta_desc' })} /> */}
        <meta property="og:url" content="https://iog.io" />
        <meta
          property="og:site_name"
          content={intl.formatMessage({ id: 'title' })}
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content={intl.formatMessage({ id: 'title' })}
        />
        {/* <meta name="twitter:description" content={intl.formatMessage({ id: 'meta_desc' })} /> */}
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@inputoutputHK" />
      </Helmet>

      <main>
        {/* <div className="container">
          <LanguagePicker
            languages={[
              {
                code: 'en',
                name: intl.formatMessage({ id: `en_display` }),
                flag: <Us style={{ width: 20, height: 14 }} />,
              },
              {
                code: 'ja',
                name: intl.formatMessage({ id: `ja_display` }),
                flag: <Jp style={{ width: 20, height: 14 }} />,
              },
            ]}
            current={{
              code: intl.locale,
              name: intl.formatMessage({ id: `${intl.locale}_display` }),
            }}
            root={'en'}
          />
        </div> */}

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

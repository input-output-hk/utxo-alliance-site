import React from 'react'
import { Layout } from '../components/Layout'
import { injectIntl } from 'gatsby-plugin-intl'
import { graphql } from 'gatsby'
import { Header } from '../components/Header'
import { About } from '../components/About'
import { Testimonials } from '../components/Testimonials'
import { Members } from '../components/Members'
import { Join } from '../components/Join'
// import { Video } from '../components/Video'
import { Faqs } from '../components/Faqs'
import { Form } from '../components/Form'
import picturesElement196wPng from '../assets/images/pictures-element-196w.png'
import picturesElement490wPng from '../assets/images/pictures-element-490w.png'
import picturesElement646wPng from '../assets/images/pictures-element-646w.png'
import picturesElement979wPng from '../assets/images/pictures-element-979w.png'
import picturesElement1469wPng from '../assets/images/pictures-element-1469w.png'
import picturesElement1958wPng from '../assets/images/pictures-element-1958w.png'
import backgroundPattern1 from '../assets/images/background-pattern-1.jpg'
import { AnalyticsProvider } from '../analytics/AnalyticsContext'
// import videoPosterJpg from '../assets/images/video-poster.jpg'

// markup
const IndexPage = ({ intl, data }) => {
  return (
    <Layout data={data}>
      <AnalyticsProvider>
        <Header
          title={intl.formatMessage({ id: `header.title` })}
          video={{
            provider: intl.formatMessage({ id: 'header.video.provider' }),
            embedId: intl.formatMessage({ id: 'header.video.embedId' }),
          }}
        />

        <div className="pattern-background">
          <img
            className="pattern-background__background"
            src={backgroundPattern1}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />

          <Members
            id="members"
            title={intl.formatMessage({ id: 'members.title' })}
            subtitle={intl.formatMessage({ id: 'members.subtitle' })}
          />

          <div id="about" className="pictures-element">
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
              src={picturesElement979wPng}
              srcSet={`${picturesElement196wPng} 196w, ${picturesElement490wPng} 490w, ${picturesElement646wPng} 646w, ${picturesElement979wPng} 979w, ${picturesElement1469wPng} 1469w, ${picturesElement1958wPng} 1958w`}
              sizes="42.5vw"
              alt=""
            />
          </div>
        </div>

        <Join
          title={intl.formatMessage({ id: 'join.title' })}
          content={intl.formatMessage({ id: 'join.content' })}
        />

        <Testimonials
          id="testimonials"
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

        {/* <Video
        id="utxo-model"
        preTitle={intl.formatMessage({ id: 'video.preTitle' })}
        title={intl.formatMessage({ id: 'video.title' })}
        provider={intl.formatMessage({ id: 'video.provider' })}
        embedId={intl.formatMessage({ id: 'video.embedId' })}
        poster={videoPosterJpg}
      /> */}

        <Faqs
          id="faq"
          title={intl.formatMessage({ id: 'faqs.title' })}
          items={[
            ...Array(
              parseInt(intl.formatMessage({ id: 'faqs.items.length' }))
            ).keys(),
          ].map((item) => ({
            id: `faq-${item}`,
            title: intl.formatMessage({ id: `faqs.items.${item}.title` }),
            content: intl.formatMessage({ id: `faqs.items.${item}.content` }),
          }))}
        />

        <Form
          id="join"
          title={intl.formatMessage({ id: 'form.title' })}
          content={intl.formatMessage({ id: 'form.content' })}
          labels={{
            firstname: intl.formatMessage({ id: 'form.labels.firstname' }),
            lastname: intl.formatMessage({ id: 'form.labels.lastname' }),
            company: intl.formatMessage({ id: 'form.labels.company' }),
            email: intl.formatMessage({ id: 'form.labels.email' }),
            title_and_role_in_the_project: intl.formatMessage({
              id: 'form.labels.title_and_role_in_the_project',
            }),
            why_do_you_want_to_join_the_utxo_alliance_: intl.formatMessage({
              id: 'form.labels.why_do_you_want_to_join_the_utxo_alliance_',
            }),
            how_or_what_would_you_contribute_to_the_utxo_alliance_:
              intl.formatMessage({
                id: 'form.labels.how_or_what_would_you_contribute_to_the_utxo_alliance_',
              }),
          }}
        />
      </AnalyticsProvider>
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

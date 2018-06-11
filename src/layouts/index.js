import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import 'modern-normalize/modern-normalize.css'

import Meta from '../components/Meta'
import Nav from '../components/Nav'
import GithubCorner from '../components/GithubCorner'
import './globalStyles.css'

export default ({ children, data = {} }) => {
  const {
    siteTitle,
    siteUrl,
    siteDescription,
    socialMediaCard,
    headerScripts
  } =
    data.settingsYaml || {}

  return (
    <Fragment>
      <Helmet defaultTitle={siteTitle} titleTemplate={`${siteTitle} | %s`}>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,600,700|Varela+Round"
          rel="stylesheet"
        />
      </Helmet>
      <Meta
        headerScripts={headerScripts}
        absoluteImageUrl={
          socialMediaCard &&
          socialMediaCard.image &&
          siteUrl + socialMediaCard.image
        }
        twitterCreatorAccount={
          socialMediaCard && socialMediaCard.twitterCreatorAccount
        }
        twitterSiteAccount={
          socialMediaCard && socialMediaCard.twitterSiteAccount
        }
      />

      <Nav />

      <Fragment>{children()}</Fragment>
    </Fragment>
  )
}

export const query = graphql`
  query IndexLayoutQuery {
    settingsYaml {
      siteTitle
      siteDescription
      headerScripts
      socialMediaCard {
        image
        twitterCreatorAccount
        twitterSiteAccount
      }
    }
  }
`

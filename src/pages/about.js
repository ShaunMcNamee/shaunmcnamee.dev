import React from 'react'
import { Container } from 'components/Container'
import SEO from '../components/SEO'
import { Layout } from '../components/Layout'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Link from '../components/Link'
import config from '../../config/website'

const About = ({ data: { site } }) => (
  <Layout site={site} noSubscribeForm>
    <SEO />
    <Container
      css={css`
        padding-bottom: 0;
      `}
    >
      <p>
        I am a Web Developer living in Kansas with my wife and two children. I
        enjoy programming, video games, board games, poker, baseball, and
        playing with my children.
      </p>{' '}
      <p>
        I also like solving interesting problems (both in tech and out of tech).
        I have thoughts about many topics, which you can read on my{' '}
        <Link to="/blog" aria-label="Visit blog page">
          blog
        </Link>{' '}
        or{' '}
        <Link to={config.twitter} aria-label="Visit my twitter">
          twitter
        </Link>{' '}
        if you are interested.
      </p>
      <hr />
    </Container>
  </Layout>
)

export default About

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
  }
`

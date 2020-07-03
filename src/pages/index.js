import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Layout } from '../components/Layout'
import Link from '../components/Link'
import { Container } from 'components/Container'

export default function Index({ data: { site } }) {
  return (
    <Layout site={site} noSubscribeForm>
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        <p>
          Hello, I am Shaun McNamee - welcome to my digital promenade. Feel free
          to browse around, but things here may be a little disorganized because
          that is the way I live my life. Hopefully something here is useful to
          you - I try to write about things I know, but sometimes I will use
          this as a place to learn. It is also a place to keep a record of my
          thoughts, even if just for me to go back and look at.
        </p>
        <p>
          Most of the things I write about will be tech related, but other
          subject I might delve into are: video games I am currently playing, TV
          I am currently watching, parenting, etc.
        </p>
        <p>Here are a some of my completed writings:</p>
        <ul>
          <li>
            <Link
              to="/blog/burnout"
              aria-label="A story about my burnout and recovery"
            >
              Burnout
            </Link>
          </li>
          <li>
            <Link to="/blog/remote-work" aria-label="How to do remote work">
              Remote work
            </Link>
          </li>
          <li>
            <Link
              to="/blog/the-wrong-abstraction"
              aria-label="About creating good abstractions"
            >
              The wrong abstraction
            </Link>
          </li>
        </ul>
        <hr />
      </Container>
    </Layout>
  )
}

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

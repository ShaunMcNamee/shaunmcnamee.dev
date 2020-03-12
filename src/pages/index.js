import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Layout } from '../components/Layout'
import Link from '../components/Link'
import { Container } from 'components/Container'
import { rhythm } from '../lib/typography'
import theme from '../../config/theme'
import config from '../../config/website'

const Hero = () => (
  <section
    css={css`
      * {
        color: ${theme.brand.white};
      }
      width: 100%;
      background: ${theme.brand.blue};
      padding: 0 0 30px 0;
      display: flex;
    `}
  >
    <Container
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <h1
        css={css`
          position: relative;
          z-index: 5;
          line-height: 1.5;
          margin: 0;
          max-width: ${rhythm(15)};
        `}
      >
        The life and times of a modern web developer
      </h1>
    </Container>
    <div
      css={css`
        height: 150px;
        overflow: hidden;
      `}
    />
  </section>
)

export default function Index({ data: { site } }) {
  return (
    <Layout site={site} noSubscribeForm>
      <Hero />
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        <p>
          Hello, I am Shaun McNamee. I am a Web Developer living in Kansas with
          my wife and two children. I enjoy programming, video games, board
          games, poker, baseball, and playing with my children.
        </p>
        <p>
          I also like solving interesting problems (both in tech and out of
          tech). I have thoughts about many topics, which you can read on my{' '}
          <Link to="/blog" aria-label="Visit blog page">
            blog
          </Link>{' '}
          or{' '}
          <Link to={config.twitter} aria-label="Visit my twitter">
            twitter
          </Link>{' '}
          if you are interested.
        </p>
        <p>
          If you what I have done or where I have been in my career, you might
          want to check out these pages:
        </p>
        <ul>
          <li>
            <Link to="/work-history" aria-label="Visit work history">
              Work history
            </Link>
          </li>
          <li>
            <Link to="/personal-projects" aria-label="Visit personal projects">
              Personal projects
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/ShaunMcNamee"
              aria-label="Visit my github"
            >
              GitHub
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

import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Link from '../components/Link'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import theme from '../../config/theme'

const Hero = () => (
  <section
    css={css`
      * {
        color: ${theme.brand.white};
      }
      width: 100%;
      background: ${theme.brand.blue};
      padding: 20px 0 30px 0;
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
        This is my page, it is a work in progress
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

export default function Index({ data: { site, allMdx } }) {
  return (
    <Layout
      site={site}
      headerColor={theme.brand.white}
      headerBg={theme.brand.blue}
      noSubscribeForm
    >
      <Hero />
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        <p>
          Hello, I am Shaun McNamee. I am a Web Developer living in Kansas with
          my wife and two children. I enjoy programming (duh!), video games,
          board games, poker, baseball, and playing with my children.
        </p>
        <p>
          If you want to read thoughts I have about programming and the tech
          industry, check out my{' '}
          <Link
            to="/blog"
            aria-label="Visit blog page"
            style={{ textDecoration: 'underline' }}
          >
            blog
          </Link>
          . If you are interested, you can see my{' '}
          <Link
            to="/work-history"
            aria-label="Visit work history"
            style={{ textDecoration: 'underline' }}
          >
            work history
          </Link>
          .
        </p>
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
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`

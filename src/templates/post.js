import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import SEO from 'components/SEO'
import { css } from '@emotion/core'
import { Container } from 'components/Container'
import { Layout } from '../components/Layout'
import Share from '../components/Share'
import config from '../../config/website'
import { Stage } from '../components/Stage'

export default function Post({
  data: { site, mdx },
  pageContext: { next, prev },
}) {
  const title = mdx.frontmatter.title

  return (
    <Layout site={site} frontmatter={mdx.frontmatter} noSubscribeForm>
      <SEO frontmatter={mdx.frontmatter} isBlogPost />
      <article
        css={css`
          width: 100%;
          display: flex;
        `}
      >
        <Container>
          <h1
            css={css`
              text-align: center;
              margin-bottom: 20px;
            `}
          >
            {title}
          </h1>
          <Stage stageNumber={mdx.frontmatter.stageNumber} />
          <br />
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Container>
      </article>
      <Container noVerticalPadding>
        <Share
          url={`${config.siteUrl}blog/${mdx.frontmatter.slug}/`}
          title={title}
          twitterHandle={config.twitterHandle}
        />
        <br />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      ...site
    }
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        stageNumber
        slug
        keywords
        description
      }
      body
    }
  }
`

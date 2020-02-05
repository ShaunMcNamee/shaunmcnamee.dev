import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Container } from 'components/Container'
import SEO from '../components/SEO'
import { Layout } from '../components/Layout'
import Work from '../components/Work'

const WorkHistory = ({ data: { site, allMdx } }) => {
  const jobs = allMdx.edges.map(edge => ({
    ...edge.node.frontmatter,
    body: edge.node.body,
  }))

  return (
    <Layout site={site} noSubscribeForm>
      <SEO />
      <Container noVerticalPadding>
        {jobs.map(job => (
          <Work job={job} />
        ))}
        <hr
          css={css`
            margin: 30px 0;
          `}
        />
      </Container>
    </Layout>
  )
}

export default WorkHistory

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
    allMdx(
      sort: { fields: [frontmatter___endDate], order: DESC }
      filter: { fileAbsolutePath: { regex: "//content/work-history//" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            startDate(formatString: "MMMM YYYY")
            endDate(formatString: "MMMM YYYY")
            company
            title
          }
          body
        }
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Container } from 'components/Container'
import SEO from '../components/SEO'
import { Layout } from '../components/Layout'
import Project from '../components/Project'

const PersonalProjects = ({ data: { site, allMdx } }) => {
  const projects = allMdx.edges.map(edge => ({
    ...edge.node.frontmatter,
    body: edge.node.body,
  }))

  return (
    <Layout site={site} noSubscribeForm>
      <SEO />
      <Container noVerticalPadding>
        {projects.map(project => (
          <Project project={project} />
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

export default PersonalProjects

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
    allMdx(
      sort: { fields: [frontmatter___endDate], order: DESC }
      filter: { fileAbsolutePath: { regex: "//content/personal-projects//" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            description
            link
            repo
          }
          body
        }
      }
    }
  }
`

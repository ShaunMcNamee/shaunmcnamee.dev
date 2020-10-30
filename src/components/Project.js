import React from 'react'
import { css } from '@emotion/core'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import Link from './Link'

const Project = ({ project }) => {
  return (
    <div
      css={css`
        padding: 16px 0 0 0;
        display: flex;
        flex-direction: column;
      `}
    >
      <h2>{project.name}</h2>{' '}
      <h5
        css={css`
          padding: 4px 0;
          margin-bottom: 12px;
        `}
      >
        {project.description}
      </h5>
      <Link
        to={project.link}
        css={css`
          font-size: 18px;
          font-weight: bold;
          padding-bottom: 8px;
        `}
      >
        View project
      </Link>
      <Link
        to={project.repo}
        css={css`
          font-size: 18px;
          font-weight: bold;
          padding-bottom: 8px;
        `}
      >
        View code repository
      </Link>
      <MDXRenderer>{project.body}</MDXRenderer>
    </div>
  )
}

export default Project

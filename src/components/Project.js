import React from 'react'
import { css } from '@emotion/core'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import Link from './Link'

const Project = ({ project }) => {
  return (
    <div
      css={css`
        padding: 16px 0 0 0;
      `}
    >
      <div
        css={css`
          padding: 0 0 8px 0;
        `}
      >
        <Link
          to={project.link}
          css={css`
            font-size: 18px;
            font-weight: bold;
          `}
        >
          {project.name}
        </Link>
      </div>
      <h6
        css={css`
          padding: 4px 0;
          margin-bottom: 12px;
        `}
      >
        {project.description}
      </h6>
      <MDXRenderer>{project.body}</MDXRenderer>
    </div>
  )
}

export default Project

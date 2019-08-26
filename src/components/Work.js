import React from 'react'
import { css } from '@emotion/core'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

const Work = ({ job }) => {
  return (
    <div
      css={css`
        padding: 12px 0 0 0;
      `}
    >
      <h4>{`${job.title} - ${job.company}`}</h4>
      <h6>{`${job.startDate} - ${job.endDate}`}</h6>
      <MDXRenderer>{job.body}</MDXRenderer>
    </div>
  )
}

export default Work

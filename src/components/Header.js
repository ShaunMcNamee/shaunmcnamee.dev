import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../../config/theme'

import Container from './Container'

const Header = ({
  dark,
  bgColor = 'none',
  siteTitle,
  headerColor = 'black',
}) => (
  <header
    css={css`
      width: 100%;
      flex-shrink: 0;
      background: none;
      padding: 30px 0;
      background: ${dark ? '#090909' : `${bgColor}` || 'none'};
    `}
  >
    <Container noVerticalPadding>
      <nav
        css={css`
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: ${headerColor};
          a {
            color: ${headerColor ? headerColor : theme.colors.body_color};
          }
          a:hover {
            color: ${headerColor === theme.brand.white
              ? theme.brand.black
              : theme.colors.link_color_hover};
          }
        `}
      >
        <Link
          to="/"
          aria-label="go to homepage"
          activeStyle={{ color: theme.brand.grey }}
        >
          {siteTitle}
        </Link>
        <div>
          <Link
            to="/blog"
            aria-label="View blog page"
            activeStyle={{ color: theme.brand.grey }}
          >
            Blog
          </Link>
          &nbsp; &nbsp;
          <Link
            to="/work-history"
            aria-label="Visit work history"
            activeStyle={{ color: theme.brand.grey }}
          >
            Resume
          </Link>
        </div>
      </nav>
    </Container>
  </header>
)

export default Header

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

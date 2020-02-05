import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../../config/theme'

import { Container } from './Container'

export const Header = ({ dark = false }) => {
  const colors = dark ? theme.dark : theme.light
  return (
    <header
      css={css`
        width: 100%;
        flex-shrink: 0;
        padding: 30px 0;
        background: ${colors.headerBackground};
      `}
    >
      <Container noVerticalPadding>
        <nav
          css={css`
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: ${colors.headerText};
            a {
              color: ${colors.headerButtonText};
            }
            a:hover {
              color: ${colors.headerButtonHover};
            }
          `}
        >
          <Link
            to="/"
            aria-label="go to homepage"
            activeStyle={{ color: colors.headerButtonActive }}
          >
            Home
          </Link>
          <div>
            <Link
              to="/blog"
              aria-label="View blog page"
              activeStyle={{ color: colors.headerButtonActive }}
            >
              Blog
            </Link>
            &nbsp; &nbsp;
            <Link
              to="/work-history"
              aria-label="Visit work history"
              activeStyle={{ color: colors.headerButtonActive }}
            >
              Resume
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  )
}

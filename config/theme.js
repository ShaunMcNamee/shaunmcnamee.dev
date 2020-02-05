import { fonts } from '../src/lib/typography'

const brand = {
  blue: '#61A7E1',
  navy: '#152534',
  black: '#000000',
  white: '#F6F7F7',
  grey: '#616367',
  silver: '#A9A9A9',
}

const colors = {
  gray: brand.grey,
  black: brand.black,
  bg_color: brand.white,
  body_color: brand.black,
  link_color: brand.blue,
  link_color_hover: brand.blue,
  red: '#E86C60',
  green: '#29B573',
}

const light = {
  headerBackground: brand.blue,
  headerText: brand.white,
  headerButtonText: brand.white,
  headerButtonHover: brand.navy,
  headerButtonActive: brand.grey,
}

const dark = {
  headerBackground: brand.black,
  headerText: brand.white,
  headerButtonText: brand.white,
  headerButtonHover: brand.blue,
  headerButtonActive: brand.silver,
}

const theme = {
  colors,
  fonts,
  brand,
  light,
  dark,
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
  container: {
    base: '100rem',
    text: '55rem',
  },
  spacer: {
    horizontal: '2rem',
    vertical: '3rem',
  },
  transition: {
    ease: 'all 150ms ease',
  },
}

export default theme

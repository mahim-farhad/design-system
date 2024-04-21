const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // xs: '20rem',
      sm: '40rem',
      md: '48rem',
      lg: '64rem',
      xl: '80rem',
      '2xl': '97.5rem',
    },
    fontFamily: {
      default: ['var(--font-inter)'],
      headings: ['var(--font-inter)'],
      arvo: ['var(--font-arvo)'],
      mono: ['var(--font-fira-code)'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      font: {
        dark: colors.gray[100],
        light: colors.gray[900],
      },
      heading: {
        dark: colors.white,
        light: colors.gray[800],
      },
      surface: {
        dark: '#182029',
        light: colors.gray[50],
      },
      background: {
        dark: '#0e151a',
        light: colors.white,
      },
      primary: {
        DEFAULT: "#2fb2ab",
      },
      secondary: {
        DEFAULT: colors.gray[900],
      },
      info: {
        DEFAULT: colors.blue[500],
      },
      success: {
        DEFAULT: colors.green[500],
      },
      warning: {
        DEFAULT: colors.amber[500],
      },
      error: {
        DEFAULT: colors.red[500],
      },
      google: '#3c7ff1',
      facebook: '#0165e1',
      twitter: '#000000',
      instagram: '#125688',
      pinterest: '#cc2127',
      dribbble: '#ea4c89',
      behance: '#1769ff',
      fiverr: '#1dbf73',
    },
    extend: {
      minHeight: {
        screen: [
          '100dvh'
        ],
      },
    },
  },
  plugins: [],
}

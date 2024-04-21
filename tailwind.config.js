import {
  black,
  white,
  gray,
  blue,
  green,
  amber,
  red
} from "tailwindcss/colors"

/** @type {import("tailwindcss").Config} */
export const mode = "jit"
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
]

export const theme = {
  screens: {
    // xs: "20rem",
    sm: "40rem",
    md: "48rem",
    lg: "64rem",
    xl: "80rem",
    "2xl": "97.5rem",
  },
  fontFamily: {
    default: ["var(--font-inter)"],
    headings: ["var(--font-arvo)"],
    arvo: ["var(--font-arvo)"],
    mono: ["var(--font-fira-code)"],
  },
  colors: {
    transparent: "transparent",
    current: "currentColor",
    black: black,
    white: white,
    gray: gray,
    font: {
      dark: gray[100],
      light: gray[900],
    },
    heading: {
      dark: white,
      light: gray[800],
    },
    surface: {
      dark: "#182029",
      light: "#FFFFFF",
    },
    background: {
      dark: "#0e151a",
      light: "#F9FAFB",
    },
    primary: {
      DEFAULT: "#2fb2ab",
    },
    secondary: {
      DEFAULT: gray[900],
    },
    info: {
      DEFAULT: blue[500],
    },
    success: {
      DEFAULT: green[500],
    },
    warning: {
      DEFAULT: amber[500],
    },
    error: {
      DEFAULT: red[500],
    },
    google: "#3c7ff1",
    facebook: "#0165e1",
    twitter: "#000000",
    instagram: "#125688",
    pinterest: "#cc2127",
    dribbble: "#ea4c89",
    behance: "#1769ff",
    fiverr: "#1dbf73",
  },
  extend: {
    minHeight: {
      screen: [
        "100dvh"
      ],
    },
  },
}

export const plugins = []

import { tosh as light, deep as dark } from "@theme-ui/presets"
import { merge } from "theme-ui"

import "@fontsource/raleway/700.css"
import "@fontsource/bitter/700.css"

const theme = merge(light, {
  colors: {
    text: "#1E212B",
    primary: "#D90368",
    secondary: "#FFD400",
    background: "#FFFFFF",
    modes: {
      dark: {
        ...dark.colors,
      },
    },
  },
  sizes: {
    container: 460,
  },
  fonts: {
    body: "'Raleway', sans-serif",
    heading: "'Bitter', sans-serif",
  },
  fontSizes: [12, 14, 18, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 700,
    heading: 700,
    bold: 700,
  },
  buttons: {
    primary: {
      border: theme => `1px solid ${theme.colors.primary}`,
      cursor: "pointer",
      bg: "primary",
      color: "background",
      "&:hover": {
        bg: "background",
        color: "primary",
      },
    },
    secondary: {
      border: theme => `1px solid ${theme.colors.primary}`,
      cursor: "pointer",
      bg: "background",
      color: "primary",
      "&:hover": {
        bg: "primary",
        color: "background",
      },
    },
  },
  cards: {
    primary: {
      padding: 3,
      borderRadius: 4,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      mb: 3,
    },
  },
  styles: {
    a: {
      color: "primary",
      textDecoration: "none",
      "&:hover": {
        color: "secondary",
      },
      cursor: "pointer",
    },
    code: {
      bg: `muted`,
      px: 1,
      borderRadius: 3,
    },
    img: {
      width: "100%",
    },
  },
})
export default theme

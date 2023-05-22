import { ThemeProvider } from "@emotion/react"

const myTheme = {
  colors: {
    white: "#ffffff",
    warning: "",
    focus: "",
    primary: {
      a: "#5754ED",
      b: "",
      c: "",
    },
    secondary: {
      a: "#EBEAF9",
      b: "",
      c: "",
    },
    neutral: {
      a: "#373737",
      b: "",
      c: "",
    },
    dark: {
      a: "",
      b: "",
    },
  },
  spacing: {
    xxl: "64px",
    xl: "48px",
    l: "32px",
    m: "24px",
    s: "16px",
    xs: "8px",
    xxs: "4px",
  },
  fontFamily: "'Montserrat', sans-serif",
}

export const Theme = ({ children }) => {
  return <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
}

import { ThemeProvider } from "@emotion/react"

const myTheme = {
  colors: {
    white: "",
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
      a: "",
      b: "",
      c: "",
    },
    dark: {
      a: "",
      b: "",
    },
  },
  spacing: {
    l: "32px",
    s: "16px",
  },
}

export const Theme = ({ children }) => {
  return <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
}

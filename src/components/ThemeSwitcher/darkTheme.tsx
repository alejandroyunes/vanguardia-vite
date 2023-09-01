import { DefaultTheme } from "styled-components"

export const breakpoint = {
  xs: "768px",
  sm: "1024px",
  md: "1280px",
  lg: "1600px",
}

export const zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
}

export const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  title: "36px",
  titleMobile: "30px",
  "2md": "32px",
  "2xl": "24px",
  "3xl": "28px",
  "4xl": "36px",
  "4.5xl": "42px",
  "5xl": "48px",
  "6xl": "64px",
  "9xl": "96px",
}

export const fonts = {
  primary: '"Lato", sans-serif',
  secondary: '"Lato", sans-serif',
  tertiary: '"Lato", sans-serif',
  foutiary: '"Open Sans", sans-serif'
}

export const darkTheme: DefaultTheme = {
    name: "darkmode",
    borderRadius: "4px",
    bodyColor: "#111111",
    textColor: "#f8f8f8",
    palette: {
      common: {
        black: "#212121",
        white: "#ffffff",
      },
      primary: {
        main: "#8D203D",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#d946ef",
        contrastText: "#ffffff",
      },
    },
  breakpoint,
  zIndices,
  fontSizes,
  fonts
}

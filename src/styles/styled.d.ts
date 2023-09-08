import "styled-components"

interface BreakpointTypes {
  xs: string
  sm: string
  md: string
  lg: string
}

interface IPalette {
  main: string
  contrastText: string
}

export interface ZindexType {
  hide: number
  auto: string
  base: number
  docked: number
  dropdown: number
  sticky: number
  banner: number
  overlay: number
  modal: number
  popover: number
  skipLink: number
  toast: number
  tooltip: number
}

export interface FontSizeType {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  title: string
  titleMobile: string
  "2xl": string
  "3xl": string
  "4xl": string
  "5xl": string
  "6xl": string
  "9xl": string
}

export interface FontType {
  primary?: string
  secondary: string
  tertiary: string
  foutiary: string
}

declare module "styled-components" {
  export interface DefaultTheme {
    name: string
    bodyColor: string
    textColor: string
    palette: {
      black: string
      white: string
      gray: string
      red: string
      primary: IPalette
      secondary: IPalette
    }
    breakpoint: BreakpointTypes
    zIndices: ZindexType
    fontSizes: FontSizeType
    fonts: FontType
  }
}

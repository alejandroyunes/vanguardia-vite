// components/themes/defaultTheme.tsx
import { DefaultTheme } from "styled-components";
import { breakpoint, fontSizes, fonts, zIndices } from "./darkTheme";

export const lightTheme: DefaultTheme = {
  name: "lightmode",
  bodyColor: "#ffffff",
  textColor: "#212121",
  palette: {
    black: "#212121",
    white: "#ffffff",
    gray: "#666666",
    red: "#ae3c43",
    primary: {
      main: "#216397",
      contrastText: "#031027",
    },
    secondary: {
      main: "#555555",
      contrastText: "#b6b6b6",
    },
  },
  breakpoint,
  zIndices,
  fontSizes,
  fonts
};
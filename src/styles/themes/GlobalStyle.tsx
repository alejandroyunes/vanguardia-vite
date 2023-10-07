import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-size: 16px;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
*,
*:before,
*:after {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
}
  body {
    background-color: ${({ theme }) => theme.bodyColor};
    color: ${({ theme }) => theme.textColor};
    font-weight: normal;
    margin: 0;
  }
  .visually-hidden {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap; /* Added for extra safety */
  }
`;

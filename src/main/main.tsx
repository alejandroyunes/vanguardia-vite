import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom"
import { useLocalStorage } from "usehooks-ts"

import router from './routes/index.tsx'
import Header from '../components/Header/Header.tsx'
import "../scss/styles.scss"
import { ThemeProvider } from "styled-components"
import { darkTheme } from "../styles/themes/darkTheme"

// const [ theme ] = useLocalStorage('theme', darkTheme)


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}

      <Header />
      <RouterProvider router={router} />

    {/* </ThemeProvider> */}

  </React.StrictMode>,
)


// import Layout from '../pages/Layout.tsx';
// import { darkTheme, lightTheme } from "../theme.ts";
// import { useLocalStorage } from 'usehooks-ts';
// const [theme, setTheme] = useLocalStorage('theme', darkTheme)
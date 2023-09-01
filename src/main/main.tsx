import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom"
import router from './routes/index.tsx'

import "../scss/styles.scss"
import Header from '../components/Header/Header.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>,
)




// import Layout from '../pages/Layout.tsx';
// import { darkTheme, lightTheme } from "../theme.ts";
// import { useLocalStorage } from 'usehooks-ts';
// const [theme, setTheme] = useLocalStorage('theme', darkTheme)
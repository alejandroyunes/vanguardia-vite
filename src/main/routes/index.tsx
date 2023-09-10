import App from '../../pages/index.tsx'
import About from '../../pages/about.tsx'
import Services from '../../pages/services.tsx'
import Portfolio from '../../pages/portfolio.tsx'

import ErrorPage from '../../pages/error-page.tsx'
import { RouteObject } from "react-router-dom"

const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/sobre-mi',
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: '/servicios',
    element: <Services />,
    errorElement: <ErrorPage />
  },
  {
    path: '/portafolio',
    element: <Portfolio />,
    errorElement: <ErrorPage />
  },
];


export default routerConfig
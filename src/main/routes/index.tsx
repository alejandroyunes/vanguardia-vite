import { RouteObject } from "react-router-dom"

import App from '../../pages/index.tsx'
import About from '../../pages/about.tsx'
import Services from '../../pages/services.tsx'
import Blog from '../../pages/blog.tsx'
import Portfolio from '../../pages/portfolio.tsx'
import ErrorPage from '../../pages/error-page.tsx'

import BlogArticle from '../../components/Blog/BlogArticle/BlogArticle.tsx'
import Layout from '../layout.tsx'


const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
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
      {
        path: '/blog',
        element: <Blog />,
        errorElement: <ErrorPage />
      },
      {
        path: '/blog-article/:id',
        element: <BlogArticle />,
        errorElement: <ErrorPage />
      },
    ]
  },
];

export default routerConfig
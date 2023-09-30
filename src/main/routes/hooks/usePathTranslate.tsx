import { useReadLocalStorage } from "usehooks-ts"
import Layout from "../../layout"
import App from '../../../pages/index'
import About from '../../../pages/about.tsx'
import Services from '../../../pages/services.tsx'
import Portfolio from '../../../pages/portfolio.tsx'
import ErrorPage from '../../../pages/error-page.tsx'
import Blog from "../../../pages/blog.tsx"
import BlogArticle from "../../../components/Blog/BlogArticle/BlogArticle.tsx"

const spanish = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      {
        path: 'sobre-mi',
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
]
const english = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      {
        path: 'about-us',
        element: <About />,
        errorElement: <ErrorPage />
      },
      {
        path: '/servivces',
        element: <Services />,
        errorElement: <ErrorPage />
      },
      {
        path: '/portfolio',
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
]

export default function usePathTranslate() {

const lang = useReadLocalStorage('language')

  console.log('im here', lang)

  lang === 'spanish' ? spanish : english

  return lang === 'spanish' ? spanish : english;
}
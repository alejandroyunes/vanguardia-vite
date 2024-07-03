import { RouteObject } from "react-router-dom";

import App from "../../pages/app.tsx";
import About from "../../pages/about.tsx";
import Services from "../../pages/services.tsx";
import Blog from "../../pages/blog.tsx";
import Portfolio from "../../pages/portfolio.tsx";
import ErrorPage from "../../pages/error-page.tsx";

import BlogArticle from "../../components/Blog/BlogArticle/BlogArticle.tsx";
import Layout from "../layout.tsx";
import Contact from "../../pages/contact.tsx";
import AlejandroPage from "../../pages/alejandro.tsx";

const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/services",
        element: <Services />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/blog",
        element: <Blog />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/alejandro",
        element: <AlejandroPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/blog-article/:id",
        element: <BlogArticle />,
        errorElement: <ErrorPage />,
      },
    ],
  },
];

export default routerConfig;

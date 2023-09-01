import App from '../../App.tsx'
import ErrorPage from '../../pages/error-page.tsx'
import Root from '../routes/root.tsx'
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/root",
    element: <Root />,
  },
])

export default router
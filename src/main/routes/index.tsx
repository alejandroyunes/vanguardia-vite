import App from '../../pages/index.tsx'
import ErrorPage from '../../pages/error-page.tsx'
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
])

export default router
import { createBrowserRouter } from "react-router-dom";
import ApiPage from "./pages/ApiPage.jsx";
import AuthenticationFormLayout from './layouts/AuthenticationFormLayout.jsx'
import HomePage from "./pages/HomePage.jsx";
import LoginPage from './pages/LoginPage.jsx';
import RedirectIfAuthenticatedMiddleware from './middlewares/RedirectIfAuthenticated.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: '/',
    element: <RedirectIfAuthenticatedMiddleware />,
    children: [
      {
        path: '/',
        element: <AuthenticationFormLayout />,
        children: [
          {
            path: '/login',
            element: <LoginPage />
          }
        ]
      }
    ]
  },
  {
    path: "/api/user",
    element: <ApiPage url="/user" />
  }
]);

export default router;

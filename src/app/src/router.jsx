import { createBrowserRouter } from "react-router-dom";
import ApiPage from "./pages/ApiPage.jsx";
import AuthenticationFormLayout from './layouts/AuthenticationFormLayout.jsx'
import HomePage from "./pages/HomePage.jsx";
import RedirectIfAuthenticatedMiddleware from './middlewares/RedirectIfAuthenticated.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import VerifyEmailPage from './pages/VerifyEmailPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: '/register',
    element:
    <RedirectIfAuthenticatedMiddleware>
      <AuthenticationFormLayout>
        <RegisterPage />
      </AuthenticationFormLayout>
    </RedirectIfAuthenticatedMiddleware>,
  },
  {
    path: 'verify-email/:email',
    element: 
    <AuthenticationFormLayout>
      <VerifyEmailPage />
    </AuthenticationFormLayout>
  },
  {
    path: "/api/user",
    element: <ApiPage url="/user" />
  }
]);

export default router;

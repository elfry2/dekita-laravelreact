import { createBrowserRouter } from "react-router-dom";
import ApiPage from "./pages/ApiPage.jsx";
import FormLayout from './layouts/FormLayout.jsx'
import EmailVerifiedPage from './pages/EmailVerifiedPage.jsx';
import HomePage from "./pages/HomePage.jsx";
import RedirectIfAuthenticatedMiddleware from './middlewares/RedirectIfAuthenticated.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import VerifyEmailPage from './pages/VerifyEmailPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: '/login',
    element:
    <RedirectIfAuthenticatedMiddleware>
      <FormLayout>
        <LoginPage />
      </FormLayout>
    </RedirectIfAuthenticatedMiddleware>,
  },
  {
    path: '/register',
    element:
    <RedirectIfAuthenticatedMiddleware>
      <FormLayout>
        <RegisterPage />
      </FormLayout>
    </RedirectIfAuthenticatedMiddleware>,
  },
  {
    path: 'verify-email/:email',
    element: 
    <FormLayout>
      <VerifyEmailPage />
    </FormLayout>
  },
  {
    path: 'email-verified',
    element: 
    <FormLayout>
      <EmailVerifiedPage />
    </FormLayout>
  },
  {
    path: "/api/user",
    element: <ApiPage url="/user" />
  }
]);

export default router;

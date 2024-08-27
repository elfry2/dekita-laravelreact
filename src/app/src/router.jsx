import { createBrowserRouter } from "react-router-dom";
import ApiPage from "./pages/Api.jsx";
import FormLayout from './layouts/Form.jsx'
import EmailVerifiedPage from './pages/EmailVerified.jsx';
import HomePage from "./pages/Home.jsx";
import RedirectIfAuthenticatedMiddleware from './middlewares/RedirectIfAuthenticated.jsx';
import RegisterPage from './pages/Register.jsx';
import LoginPage from './pages/Login.jsx';
import VerifyEmailPage from './pages/VerifyEmail.jsx';

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

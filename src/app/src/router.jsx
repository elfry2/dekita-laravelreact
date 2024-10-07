import { createBrowserRouter } from "react-router-dom";
import { AuthenticationProvider as AuthenticationContextProvider } from './contexts/Authentication.jsx';
import AccountRegisteredPage from './pages/AccountRegistered.jsx';
import ApiPage from "./pages/Api.jsx";
import DashboardLayout from './layouts/Dashboard.jsx';
import FormLayout from './layouts/Form.jsx'
import EmailVerifiedPage from './pages/EmailVerified.jsx';
import EnsureAuthenticatedMiddleware from './middlewares/EnsureAuthenticated.jsx'
import HomePage from "./pages/Home.jsx";
import RedirectIfAuthenticatedMiddleware from './middlewares/RedirectIfAuthenticated.jsx';
import RegisterPage from './pages/Register.jsx';
import LoginPage from './pages/Login.jsx';
import LogoutPage from './pages/Logout.jsx';
import UserIndexPage from './pages/UserIndex.jsx';
import VerifyEmailPage from './pages/VerifyEmail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: '/login',
    element:
    <AuthenticationContextProvider>
      <RedirectIfAuthenticatedMiddleware>
        <FormLayout>
          <LoginPage />
        </FormLayout>
      </RedirectIfAuthenticatedMiddleware>,
    </AuthenticationContextProvider>
  },
  {
    path: '/register',
    element:
    <AuthenticationContextProvider>
      <RedirectIfAuthenticatedMiddleware>
        <FormLayout>
          <RegisterPage />
        </FormLayout>
      </RedirectIfAuthenticatedMiddleware>
    </AuthenticationContextProvider>
  },
  {
    path: '/logout',
    element:
    <AuthenticationContextProvider>
    <EnsureAuthenticatedMiddleware>
      <LogoutPage />
    </EnsureAuthenticatedMiddleware>
    </AuthenticationContextProvider>
  },
  {
    path: '/dashboard',
    element:
    <AuthenticationContextProvider>
      <EnsureAuthenticatedMiddleware>
        <DashboardLayout />
      </EnsureAuthenticatedMiddleware>
    </AuthenticationContextProvider>
  },
  {
    path: '/account-registered',
    element:
    <FormLayout>
      <AccountRegisteredPage />
    </FormLayout>
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
  },
  {
    path: '/users',
    element:
    <AuthenticationContextProvider>
      <EnsureAuthenticatedMiddleware>
        <DashboardLayout>
          <UserIndexPage />
        </DashboardLayout>
      </EnsureAuthenticatedMiddleware>
    </AuthenticationContextProvider>
  }
]);

export default router;

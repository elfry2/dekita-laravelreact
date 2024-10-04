import { createBrowserRouter } from "react-router-dom";
import { AuthenticatedUserProvider as AuthenticatedUserContextProvider } from './contexts/AuthenticatedUser.jsx';
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
    <AuthenticatedUserContextProvider>
      <RedirectIfAuthenticatedMiddleware>
        <FormLayout>
          <LoginPage />
        </FormLayout>
      </RedirectIfAuthenticatedMiddleware>,
    </AuthenticatedUserContextProvider>
  },
  {
    path: '/register',
    element:
    <AuthenticatedUserContextProvider>
      <RedirectIfAuthenticatedMiddleware>
        <FormLayout>
          <RegisterPage />
        </FormLayout>
      </RedirectIfAuthenticatedMiddleware>
    </AuthenticatedUserContextProvider>
  },
  {
    path: '/logout',
    element:
    <AuthenticatedUserContextProvider>
    <EnsureAuthenticatedMiddleware>
      <LogoutPage />
    </EnsureAuthenticatedMiddleware>
    </AuthenticatedUserContextProvider>
  },
  {
    path: '/dashboard',
    element:
    <AuthenticatedUserContextProvider>
      <EnsureAuthenticatedMiddleware>
        <DashboardLayout />
      </EnsureAuthenticatedMiddleware>
    </AuthenticatedUserContextProvider>
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
    <AuthenticatedUserContextProvider>
      <EnsureAuthenticatedMiddleware>
        <DashboardLayout>
          <UserIndexPage />
        </DashboardLayout>
      </EnsureAuthenticatedMiddleware>
    </AuthenticatedUserContextProvider>
  }
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import { AuthenticationProvider as AuthenticationContextProvider } from './contexts/Authentication.jsx';
import { Navigate } from 'react-router-dom';
import AccountRegisteredPage from './pages/AccountRegistered.jsx';
import ApiTestPage from "./pages/ApiTest.jsx";
import DashboardLayout from './layouts/Dashboard.jsx';
import FormLayout from './layouts/Form.jsx'
import EmailVerifiedPage from './pages/EmailVerified.jsx';
import EnsureAuthenticatedMiddleware from './middlewares/EnsureAuthenticated.jsx'
import Hello from './pages/Hello.jsx';
import HomePage from "./pages/Home.jsx";
import PreferenceFeatureTestForm from "./pages/PreferenceFeatureTestForm.jsx";
import RedirectIfAuthenticatedMiddleware from './middlewares/RedirectIfAuthenticated.jsx';
import RegisterPage from './pages/Register.jsx';
import LoginPage from './pages/Login.jsx';
import LogoutPage from './pages/Logout.jsx';
import UserCreationFormPage from './pages/UserCreationForm.jsx';
import UserIndexPage from './pages/UserIndex.jsx';
import VerifyEmailPage from './pages/VerifyEmail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "dashboard",
        element: <Navigate to="/hello" />
      },
      {
        path: 'test',
        children: [
          {
            path: 'preferences',
            element:
            <AuthenticationContextProvider>
              <EnsureAuthenticatedMiddleware>
                <PreferenceFeatureTestForm />
              </EnsureAuthenticatedMiddleware>
            </AuthenticationContextProvider>
          }
        ]
      },
      {
        path: 'login',
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
        path: 'register',
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
        path: 'logout',
        element:
        <AuthenticationContextProvider>
          <EnsureAuthenticatedMiddleware>
            <LogoutPage />
          </EnsureAuthenticatedMiddleware>
        </AuthenticationContextProvider>
      },
      {
        path: 'hello',
        element:
        <AuthenticationContextProvider>
          <EnsureAuthenticatedMiddleware>
            <DashboardLayout>
              <Hello />
            </DashboardLayout>
          </EnsureAuthenticatedMiddleware>
        </AuthenticationContextProvider>
      },
      {
        path: 'account-registered',
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
        path: 'api-test',
        element: <ApiTestPage />,
      },
      {
        path: 'users',
        element:
          <AuthenticationContextProvider>
            <EnsureAuthenticatedMiddleware>
              <DashboardLayout>
                <UserIndexPage />
              </DashboardLayout>
            </EnsureAuthenticatedMiddleware>
          </AuthenticationContextProvider>,
      },
      {
        path: 'users/new',
        element:
          <AuthenticationContextProvider>
            <EnsureAuthenticatedMiddleware>
              <FormLayout>
                <UserCreationFormPage />
              </FormLayout>
            </EnsureAuthenticatedMiddleware>
          </AuthenticationContextProvider>,
      },
    ]
  },
]);

export default router;

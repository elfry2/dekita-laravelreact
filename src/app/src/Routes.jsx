import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes as ReactRouterDomRoutes } from "react-router-dom";
import { AuthenticatedUserProvider as AuthenticatedUserContextProvider } from './contexts/AuthenticatedUser.jsx';
import { AuthenticationProvider as AuthenticationContextProvider } from './contexts/Authentication.jsx';
import { Navigate } from 'react-router-dom';
import AccountRegisteredPage from './pages/AccountRegistered.jsx';
import ApiPage from "./pages/Api.jsx";
import DashboardLayout from './layouts/Dashboard.jsx';
import FormLayout from './layouts/Form.jsx'
import EmailVerifiedPage from './pages/EmailVerified.jsx';
import EnsureAuthenticatedMiddleware from './middlewares/EnsureAuthenticated.jsx'
import HelloPage from './pages/Hello.jsx';
import HomePage from "./pages/Home.jsx";
import PreferenceFeatureTestForm from "./pages/PreferenceFeatureTestForm.jsx";
import RedirectIfAuthenticatedMiddleware from './middlewares/RedirectIfAuthenticated.jsx';
import RegisterPage from './pages/Register.jsx';
import LoginPage from './pages/Login.jsx';
import LogoutPage from './pages/Logout.jsx';
import UserIndexPage from './pages/UserIndex.jsx';
import VerifyEmailPage from './pages/VerifyEmail.jsx';

export default function Routes() {
  return <ReactRouterDomRoutes>
    <Route path="/">
      <Route index element={<HomePage />} />
      <Route element={<RedirectIfAuthenticatedMiddleware />}>
        <Route element={<FormLayout/>}>
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Route>
      <Route element={<EnsureAuthenticatedMiddleware />}>
        <Route path="/dashboard" element={<Redirect to="/users" />} />
        <Route element={<AuthenticatedUserContextProvider />}>
          <Route element={<DashboardLayout />}>
            <Route path="/hello" element={<HelloPage />} />
            <Route path="/users" element={<UserIndexPage />} />
          </Route>
        </Route>
      </Route>
    </Route>
  </ReactRouterDomRoutes>
}

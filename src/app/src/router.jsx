import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import EnsureAuthenticatedMiddleware from "./middlewares/EnsureuthenticatedMiddleware";
import HomePage from "./pages/HomePage";
import UserIndexPage from "./pages/UserIndexPage";

export default const router = createBrowserRouter([
  {
    path: "/",
    element: <EnsureAuthenticatedMiddleware />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          {
            path: "/users";
            element: <Users />
          }
        ]
      }
    ],
    path: "/",
    element: <HomePage />
  }
]);

import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import EnsureAuthenticatedMiddleware from "./middlewares/EnsureAuthenticatedMiddleware.jsx";
import HomePage from "./pages/HomePage.jsx";
import UserIndexPage from "./pages/UserIndexPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EnsureAuthenticatedMiddleware />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          {
            path: "/users",
            element: <UserIndexPage />
          }
        ]
      }
    ],
  },
  {
    path: "/",
    element: <HomePage />
  }
]);

export default router;

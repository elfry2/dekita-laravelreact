import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  }
]);

export default router;

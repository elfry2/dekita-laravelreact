import { RouterProvider } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import router from "./router.jsx";
import HomePage from "./pages/HomePage.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "typeface-roboto";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
    {/* <App /> */}
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
)

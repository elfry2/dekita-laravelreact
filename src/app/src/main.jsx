import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-roboto';
import './index.css';
import { AppThemeProvider as AppThemeContextProvider } from './contexts/AppTheme.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { RouterProvider } from 'react-router-dom';
// import App from './App.jsx'
import router from './router.jsx';
import React from 'react'
import ReactDOM from 'react-dom/client'
import ThisIsSoDumb from './layouts/ThisIsSoDumb.jsx';
// import Routes from './Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HomePage /> */}
    {/* <BrowserRouter><Routes /></BrowserRouter> */}
    <AppThemeContextProvider>
      <ThisIsSoDumb>
        <RouterProvider router={router} />
      </ThisIsSoDumb>
    </AppThemeContextProvider>
  </React.StrictMode>
)

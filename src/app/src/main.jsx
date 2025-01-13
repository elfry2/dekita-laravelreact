import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-roboto';
import './index.css';
import { GlobalProvider as GlobalContextProvider } from './contexts/Global.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { RouterProvider } from 'react-router-dom';
// import App from './App.jsx'
import router from './router.jsx';
import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalContextConsumer from './layouts/GlobalContextConsumer.jsx';
// import Routes from './Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HomePage /> */}
    {/* <BrowserRouter><Routes /></BrowserRouter> */}
    <GlobalContextProvider>
      <GlobalContextConsumer>
        <RouterProvider router={router} />
      </GlobalContextConsumer>
    </GlobalContextProvider>
  </React.StrictMode>
)

import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function RedirectIfAuthenticated ({children}) {
  // if(true) return <Navigate to="/" />

  return <>
    {children}
  </>;
}

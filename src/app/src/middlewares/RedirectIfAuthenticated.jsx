import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function RedirectIfAuthenticated () {
  // if(true) return <Navigate to="/" />

  return <>
    <h1>RedirectIfAuthenticated</h1>
    <Outlet />
  </>;
}

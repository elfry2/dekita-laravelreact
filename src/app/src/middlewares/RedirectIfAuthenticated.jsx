import { useAuthentication as useAuthenticationContext } from '../contexts/Authentication';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utilities/axios-instance.js';

export default function RedirectIfAuthenticated({children}) {
  const navigateTo = useNavigate();

  /* Without this it won't refresh. */
  const { token: authenticationToken } = useAuthenticationContext();

  useEffect(() => {
    axiosInstance.get('/user')
      .then(({data}) => {
        navigateTo('/dashboard');
      })
  });

  return children;
}

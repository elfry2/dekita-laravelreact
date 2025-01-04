import { useAuthentication as useAuthenticationContext } from '../contexts/Authentication';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utilities/axios-instance.js';

export default function EnsureAuthenticated({children}) {
  const navigateTo = useNavigate();

  const { token: authenticationToken } = useAuthenticationContext();

  useEffect(() => {
    axiosInstance.get('/user')
      .catch(error => {
        navigateTo('/login');
    })
  });

  return children;
}

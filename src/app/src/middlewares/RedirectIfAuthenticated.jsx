import { useAuthenticatedUser as useAuthenticatedUserContext } from "../contexts/AuthenticatedUser.jsx";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RedirectIfAuthenticated({children}) {
  const { isDefault, authenticatedUser } = useAuthenticatedUserContext();

  const navigateTo = useNavigate();

  useEffect(() => {
    if(authenticatedUser) navigateTo('/dashboard');
  });

  return children;
}

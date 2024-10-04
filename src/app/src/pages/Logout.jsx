import { useAuthenticatedUser as useAuthenticatedUserContext } from '../contexts/AuthenticatedUser';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout () {
  const { setAuthenticatedUser } = useAuthenticatedUserContext();
  const navigateTo = useNavigate();

  useEffect(() => {
    setAuthenticatedUser();

    navigateTo('/login');
  });
}

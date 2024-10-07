import { useAuthentication as useAuthenticationContext } from '../contexts/Authentication';
import { useEffect } from 'react';

export default function Logout () {
  const { setToken: setAuthenticationToken } = useAuthenticationContext();

  useEffect(() => setAuthenticationToken());
}

import { createContext } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axiosInstance from '../utilities/axios-instance.js';

const _authenticatedUser = {
  name: 'authenticatedUser.name',
  role: {
    name: 'authenticatedUser.role.name',
  },
};

export const AuthenticatedUser = createContext(_authenticatedUser);

export const AuthenticatedUserProvider = ({children}) => {

  const [authenticatedUser, setAuthenticatedUser] = useState(_authenticatedUser);

  useEffect(() => {
    axiosInstance.get('/user')
      .then(({data}) => setAuthenticatedUser(data))
      .catch(error => console.error(error));
  }, []);

  return <AuthenticatedUser.Provider value={authenticatedUser}>
    {children}
  </AuthenticatedUser.Provider>
}

export const useAuthenticatedUser = () => useContext(AuthenticatedUser);

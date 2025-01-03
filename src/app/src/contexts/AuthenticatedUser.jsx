import { createContext } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axiosInstance from '../utilities/axios-instance.js';

export const AuthenticatedUser = createContext({
  name: 'aaa',
  role: {
    name: 'aaa',
  }
});

export const AuthenticatedUserProvider = ({children}) => {

  const [authenticatedUser, setAuthenticatedUser] = useState();

  useEffect(() => {
    axiosInstance.get('/user')
      .then(({data}) => setAuthenticatedUser(data))
      .catch(error => console.error(error));
  }, [])

  return <AuthenticatedUser.Provider value={authenticatedUser}>
    {children}
  </AuthenticatedUser.Provider>
}

export const useAuthenticatedUser = () => useContext(AuthenticatedUser);

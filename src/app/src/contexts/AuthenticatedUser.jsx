import { createContext } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import axiosInstance from '../utilities/axios-instance.js';

const AuthenticatedUser = createContext(null);
// token is to be included as a property of the auth'd user object

export const AuthenticatedUserProvider = ({children}) => {
  const [authenticatedUser, _setAuthenticatedUser]
    = useState(localStorage.getItem('authenticatedUser'));

  const setAuthenticatedUser = (authenticatedUser) => {
    
    if (!authenticatedUser) {
      localStorage.removeItem('authenticatedUser');

      return;
    }

    localStorage.setItem('authenticatedUser', authenticatedUser);

    _setAuthenticatedUser(localStorage.getItem(authenticatedUser));
  }

  return <AuthenticatedUser.Provider value={{
    authenticatedUser,
    setAuthenticatedUser
  }}>
    {children}
  </AuthenticatedUser.Provider>
}

export const useAuthenticatedUser = useContext(AuthenticatedUser);

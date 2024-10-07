import { createContext } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import axiosInstance from '../utilities/axios-instance.js';

const Authentication = createContext({
  token: null,
  setToken: null,
});

export const AuthenticationProvider = ({children}) => {
  const [token, _setToken]
    = useState(localStorage.getItem('authenticationToken'));

  const setToken = (token) => {
    if (!token) localStorage.removeItem('authenticationToken');

    else localStorage.setItem('authenticationToken', token);

    _setToken(localStorage.getItem('authenticationToken'));
  }

  return <Authentication.Provider value={{
    token,
    setToken
  }}>
    {children}
  </Authentication.Provider>
}

export const useAuthentication = () => useContext(Authentication);

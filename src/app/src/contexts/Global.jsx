import { createContext } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import config from '../config.js';

export const Global = createContext(config);

export const useGlobal = () => useContext(Global);

export const GlobalProvider = ({children}) => {
  const [_global, _setGlobal] = useState(config);

  const setGlobal = (value) => {
    _setGlobal(value);
    
    console.log(_global);
  }

  return <Global.Provider value={{
    global: _global,
    setGlobal: _setGlobal
  }}>{children}</Global.Provider>
}

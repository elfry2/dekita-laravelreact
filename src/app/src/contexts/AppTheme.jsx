import { createContext } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import config from '../config.js';

export const AppTheme = createContext();

export const useAppTheme = () => useContext(AppTheme);

export const AppThemeProvider = ({children}) => {
  const [_appTheme, _setAppTheme] = useState(config.app.theme);

  return <AppTheme.Provider value={{
    appTheme: _appTheme,
    setAppTheme: _setAppTheme
  }}>{children}</AppTheme.Provider>
}

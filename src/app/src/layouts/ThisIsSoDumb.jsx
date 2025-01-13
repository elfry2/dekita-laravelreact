import { useAppTheme as useAppThemeContext } from '../contexts/AppTheme.jsx';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axiosInstance from '../utilities/axios-instance.js';
import config from '../config.js';

export default function ThisIsSoDumb({children}) {
  const { appTheme, setAppTheme } = useAppThemeContext();

  useEffect(() => {
    axiosInstance.get('/preferences/app.theme')
      .catch()
      .then(({data}) => setAppTheme(data))
  }, []);

  return <>
    <Helmet htmlAttributes={{ "data-bs-theme" : appTheme }}>
      <title>{config.app.name}</title>
    </Helmet>
    { children }
  </>;
}

import { useGlobal as useGlobalContext } from '../contexts/Global.jsx';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axiosInstance from '../utilities/axios-instance.js';
import config from '../config.js';

export default function GlobalContextConsumer({children}) {
  const {
    global: globalContext,
    setGlobal: setGlobalContext,
  } = useGlobalContext();

  useEffect(() => {
    axiosInstance.get('/preferences/app.theme')
      .catch()
      .then(({data}) => {
        setGlobalContext({
          ...globalContext,
          app: {
            ...globalContext.app,
            theme: data,
          },
        });
      })
  }, []);

  return <>
    <Helmet htmlAttributes={{ "data-bs-theme" : globalContext.app.theme }}>
      <title>{globalContext.app.name}</title>
    </Helmet>
    { children }
  </>;
}

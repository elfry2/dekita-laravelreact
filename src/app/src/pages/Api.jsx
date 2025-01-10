import {useEffect} from 'react';
import {useState} from 'react';
import axiosInstance from '../utilities/axios-instance.js'

export default function Api({url}) {
  const [response, setResponse] = useState();

  useEffect(() => {
    axiosInstance.get(url)
      .then(({data}) => {
        setResponse(data);
      });
  }, []);

  return <pre>{JSON.stringify(response, null, 2)}</pre>;
}

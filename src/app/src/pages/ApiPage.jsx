import {useEffect} from 'react';
import {useState} from 'react';
import axiosInstance from '../utils/axios-instance.js'

export default function ApiPage({url}) {
  const [response, setResponse] = useState();

  useEffect(() => {
    axiosInstance.get(url)
      .then(({data}) => {
        setResponse(data);
      });
  }, []);

  return response;
}

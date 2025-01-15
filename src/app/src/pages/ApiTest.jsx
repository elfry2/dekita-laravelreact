import {useEffect} from 'react';
import {useState} from 'react';
import axiosInstance from '../utilities/axios-instance.js'

export default function ApiTest() {
  const [response, setResponse] = useState();

  useEffect(() => {
    axiosInstance.get('/users', {
      params: {
      page: 2,
      perPage: 10
    }})
      .then(({data}) => {
        setResponse(data);
      });
  }, []);

  return <pre>{JSON.stringify(response, null, 2)}</pre>;
}

import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../utilities/axios-instance.js';

export default function Dashboard() {
  const [authenticatedUser, setAuthenticatedUser] = useState({
    name: null,
  });

  useEffect(() => {
    axiosInstance.get('/user')
      .then(({data}) => setAuthenticatedUser(data))
      .catch(error =>console.error(error));
  });

  return <>
    <h1>Hi, {authenticatedUser.name}! This is your dashboard.</h1>
    <Link to="/logout">Sign Out</Link>
  </>
}

import { useAuthenticatedUser as useAuthenticatedUserContext } from '../contexts/AuthenticatedUser.jsx'
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { authenticatedUser } = useAuthenticatedUserContext();

  console.log(authenticatedUser);

  return <>
    <h1>Hi, {authenticatedUser.name}! This is your dashboard.</h1>
    <Link to="/logout">Sign Out</Link>
  </>
}

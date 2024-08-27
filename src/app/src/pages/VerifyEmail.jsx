import { ChevronLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axiosInstance from '../utilities/axios-instance.js';
import Button from 'react-bootstrap/Button';

export default function VerifyEmail() {

  const { email } = useParams();

  const [expirationTime, setExpirationTime] = useState();

  useEffect(() => {
    axiosInstance.get('/time/end-of-day')
      .then(({data}) => {
        setExpirationTime(data);
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);

  return <>
    <Link to="/register">
      <Button variant="outline-secondary" className="border-0">
        <ChevronLeft /><span className="ms-2">Back</span>
      </Button>
    </Link>
    <p className="mt-3">We sent an email verification link to <b>{email}</b>. Visit the link to activate your account.</p>
    <p>If the link isn't visited until {expirationTime} UTC, your account will be deleted and you will need to register again.</p>
    <p>You may leave this page now.</p>
  </>
}

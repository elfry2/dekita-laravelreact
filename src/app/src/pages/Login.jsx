import { BoxArrowInRight } from 'react-bootstrap-icons';
import { ChevronLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useAuthentication as useAuthenticationContext } from '../contexts/Authentication.jsx'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import LoadingSpan from '../components/LoadingSpan';
import Stack from 'react-bootstrap/Stack';
import axiosInstance from '../utilities/axios-instance.js';

export default function Login() {

  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigateTo = useNavigate();

  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { setToken: setAuthenticationToken } = useAuthenticationContext();

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);

    setErrors(null);

    const user = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    axiosInstance.post('/login', user)
      .then(({data}) => {
        setAuthenticationToken(data);

        setIsLoading(false);
      })
      .catch((error) => {
        const response = error.response;

        setErrors(response.data.errors);

        setIsLoading(false);
      })
    ;
  }

  return <>
    <Link to="/">
      <Button variant="outline-secondary" className="border-0">
        <ChevronLeft /><span className="ms-2">Back</span>
      </Button>
    </Link>
    {
      errors && errors.messages && errors.messages.map((message) =>
        <Alert variant="danger" key={message.toString()} dismissible>
          {message}
        </Alert>
      )
    }
    <Form>
      <FloatingLabel label="Username" className="mt-3">
        <Form.Control
          type="text"
          placeholder="Username"
          ref={usernameRef}
          isInvalid={errors && errors.username}
          autoFocus
        />
        { errors && errors.username && errors.username.map((message) => (
          <Form.Text as="small" className="text-danger">{message}</Form.Text>
        ))}
      </FloatingLabel>
      <FloatingLabel label="Password" className="mt-3">
        <Form.Control
          type="password"
          placeholder="Password"
          ref={passwordRef}
          isInvalid={errors && errors.password}
        />
        { errors && errors.password && errors.password.map((message) => (
          <Form.Text as="small" className="text-danger">{message}</Form.Text>
        ))}
      </FloatingLabel>
      <Stack className="mt-3" direction="horizontal">
        <div className="ms-auto" />
        { isLoading ? <LoadingSpan />
        : <Button
          type="submit"
          className="ms-auto"
          variant="primary"
          onClick={handleSubmit}
        >
          <BoxArrowInRight /><span className="ms-2">Sign In</span>
        </Button> }
      </Stack>
    </Form>
    <p className="text-center mt-5">
      Need an account? <Link
        className="text-decoration-none"
        to="/register"
      >Register</Link>.
    </p>
  </>
}

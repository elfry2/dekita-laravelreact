import { ChevronLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { PersonAdd } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';
import axiosInstance from '../utils/axios-instance.js';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

export default function RegisterPage () {

  const nameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const navigate = useNavigate();

  const [errors, setErrors] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors(null);

    const user = {
      name: nameRef.current.value,
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };

    axiosInstance.post('/register', user)
      .then(({data}) => {
        console.log(data);
        navigate('/verify/' + encodeURIComponent(user.email));
      })
      .catch((error) => {
        const response = error.response;

        setErrors(response.data.errors);
      })
    ;
  }

  return <>
    <Link to="/">
      <Button variant="outline-secondary" className="border-0">
        <ChevronLeft /><span className="ms-2">Back</span>
      </Button>
    </Link>
    <Form>
      <FloatingLabel label="Name" className="mt-3">
        <Form.Control
          type="text"
          placeholder="Full name"
          ref={nameRef}
          isInvalid={errors && errors.name}
        />
        { errors && errors.name && errors.name.map((message) => (
          <Form.Text as="small" className="text-danger">{message}</Form.Text>
        ))}
      </FloatingLabel>
      <FloatingLabel label="Username" className="mt-3">
        <Form.Control
          type="text"
          placeholder="Username"
          ref={usernameRef}
          isInvalid={errors && errors.username}
        />
        { errors && errors.username && errors.username.map((message) => (
          <Form.Text as="small" className="text-danger">{message}</Form.Text>
        ))}
      </FloatingLabel>
      <FloatingLabel label="Email address" className="mt-3">
        <Form.Control
          type="email"
          placeholder="name@example.com"
          aria-describedby="emailHelpBlock"
          ref={emailRef}
          isInvalid={errors && errors.email}
        />
        { errors && errors.email && errors.email.map((message) => (
          <Form.Text as="small" className="text-danger">{message}</Form.Text>
        ))}
        { (!errors || !errors.email) && <Form.Text id="emailHelpBlock" as="small">
          Verification links will be sent to this address
        </Form.Text> }
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
      <FloatingLabel label="Confirm password" className="mt-3">
        <Form.Control
          type="password"
          placeholder="Password"
          ref={passwordConfirmationRef}
        />
      </FloatingLabel>
      <Stack className="mt-3" direction="horizontal">
        <Button
          type="submit"
          className="ms-auto"
          variant="primary"
          onClick={handleSubmit}
        >
          <PersonAdd /><span className="ms-2">Register</span>
        </Button>
      </Stack>
    </Form>
  </>
}

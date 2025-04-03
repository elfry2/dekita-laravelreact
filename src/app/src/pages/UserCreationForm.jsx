import { titleCase } from 'title-case';
import { useEffect } from 'react';
import { useGlobal as useGlobalContext } from '../contexts/Global.jsx';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';
import { PlusLg } from 'react-bootstrap-icons';
import axiosInstance from '../utilities/axios-instance.js';
import pluralize from 'pluralize';
import Button from '../components/Button.jsx';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import LoadingSpan from '../components/LoadingSpan.jsx';
import Stack from 'react-bootstrap/Stack';

export default function creationForm({errors, setErrors}) {

  /**
   * Definition order:
   * - Utilities, hooks, contexts, and other imported properties
   * - Constants, states and other local properties
   * - Handlers and other methods
   * = Side effects
   * - Constructive effects
   * - View header
   * - View body
   */


  const {
    global: globalContext,
    setGlobal: setGlobalContext
  } = useGlobalContext();

  const _primary = 'user';
  const _secondary = 'role';

  const [primary, setPrimary] = useState([]);
  const [secondary, setSecondary] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState();

  const nameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const roleRef = useRef();
  const navigateTo = useNavigate();

  const onAdditionButtonClick = (event) => {
    event.preventDefault();

    setIsLoading(true);

    const payload = {
      name: nameRef.current.value,
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
      role_id: roleRef.current.value,
    }

    axiosInstance.post(`${pluralize(_primary)}/`, payload)
      .catch(error => {
        setErrors(error.response.data.errors);

        setIsLoading(false);
      })
      .then(({data}) => {
        setGlobalContext({
          ...globalContext,
          messages: [
            {
              type: 'success',
              content: `${titleCase(_primary)} created.`,
            },
          ],
        });

        setIsComplete(true);
      })
  }

  useEffect(() => {
    isComplete && navigateTo(`/${pluralize(_primary)}`);
  }, [isComplete]);

  useEffect(() => {
    axiosInstance.get(`/${pluralize(_secondary)}`)
      .catch(error => setErrors(error.response.data.errors))
      .then(({data}) => setSecondary(data));

    setGlobalContext({
      ...globalContext,
      page: {
        ...globalContext.page,
        title: `Add ${titleCase(_primary)}`,
      }
    });
  }, []);

  return <Form>
    <FloatingLabel label="Name" className="mt-3">
      <Form.Control
        type="text"
        placeholder="Full name"
        ref={nameRef}
        isInvalid={errors && errors.name}
        autoFocus
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
    <FloatingLabel label="Role" className="mt-3">
      <Form.Select
        ref={roleRef}
        isInvalid={errors && errors.role}
      >{secondary.map((item) => <option
          key={item.id}
          value={item.id}
        >{item.name}</option>)}</Form.Select>
      {errors && errors.role && errors.role.map(message => <Form.Text
        as="small"
        className="text-danger"
      >{message}</Form.Text>)}
    </FloatingLabel>
    <Stack className="mt-3" direction="horizontal">
      <div className="ms-auto" />
      {
        isLoading ? <LoadingSpan />
          : <Button
            type="submit"
            variant="primary"
            onClick={onAdditionButtonClick}
          >
            <PlusLg /><span className="ms-2">Add</span>
          </Button>
      }
    </Stack>
  </Form>
}

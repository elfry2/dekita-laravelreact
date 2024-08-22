import { ChevronLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { EnvelopeCheck } from 'react-bootstrap-icons';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';
import axiosInstance from '../utils/axios-instance.js';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

export default function VerifyEmailPage () {

  const { email } = useParams();
  const emailVerificationCodeRef = useRef();

  const [errors, setErrors] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors(null);

    axiosInstance.post('/verify', emailVerificationCodeRef.current.value)
      .then(({data}) => {
        console.log(data);
      })
      .catch((error) => {
        const response = error.response;

        setErrors(response.data.errors);
      })
    ;
  }

  return <>
    <Link to="/register">
      <Button variant="outline-secondary" className="border-0">
        <ChevronLeft /><span className="ms-2">Back</span>
      </Button>
    </Link>
    <p className="mt-3">We sent an email verification link to <b>{email}</b>. Visit the link to activate your account.</p>
    <p>You may leave this page now.</p>
    {/* <Form> */}
    {/*   <FloatingLabel label="Email verification code" className="mt-3"> */}
    {/*     <Form.Control */}
    {/*       type="text" */}
    {/*       placeholder="Email verification code" */}
    {/*       ref={emailVerificationCodeRef} */}
    {/*       isInvalid={errors && errors.emailVerificationCode} */}
    {/*       autoFocus */}
    {/*     /> */}
    {/*     { errors */}
    {/*       && errors.emailVerificationCode */}
    {/*       && errors.emailVerificationCode.map((message) => ( */}
    {/*       <Form.Text as="small" className="text-danger">{message}</Form.Text> */}
    {/*     ))} */}
    {/*   </FloatingLabel> */}
    {/*   <Stack className="mt-3" direction="horizontal"> */}
    {/*     <Button */}
    {/*       type="submit" */}
    {/*       className="ms-auto" */}
    {/*       variant="primary" */}
    {/*       onClick={handleSubmit} */}
    {/*     > */}
    {/*       <EnvelopeCheck /><span className="ms-2">Verify</span> */}
    {/*     </Button> */}
    {/*   </Stack> */}
    {/* </Form> */}
  </>
}

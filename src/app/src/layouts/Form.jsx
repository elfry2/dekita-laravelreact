import { useState } from 'react';
import { ChevronLeft } from 'react-bootstrap-icons';
import Button from '../components/Button.jsx';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

export default function Form({children, backURL = -1, title}) {
  const [errors, setErrors] = useState(null);

  return <Container
    className="mx-auto"
    style={{maxWidth: "24em"}}
  >
    {
      errors && errors.messages && errors.messages.map((message) =>
        <Alert variant="danger" key={message.toString()} dismissible>
          {message}
        </Alert>
      )
    }
    {/* <Row className="align-items-center vh-100"> */}
    <Row className="mt-3">
      <Col>
        <Stack direction="horizontal" className="align-items-center">
          <Button to={backURL}><ChevronLeft /></Button>
          <h3 className="m-0 ms-2">{title}</h3>
        </Stack>
          {React.cloneElement(children, {errors, setErrors})}
      </Col>
    </Row>
  </Container>;
}

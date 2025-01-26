import { useState } from 'react';
import { ChevronLeft } from 'react-bootstrap-icons';
import Button from '../components/Button.jsx';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';

export default function Form({children, backURL = -1, title = 'Back'}) {
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
        <Button to={backURL}><ChevronLeft /><span className="ms-2">{title}</span></Button>
          {React.cloneElement(children, {errors, setErrors})}
      </Col>
    </Row>
  </Container>;
}

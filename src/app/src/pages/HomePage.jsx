import { BoxArrowInRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import backgroundImage from '../assets/pexels-apasaric-2506923.jpg';
import classNames from 'classnames';

export default function HomePage() {
  const [show, setShow] = useState(false);

  const emailRef = useRef();

  const handleShow = () => {
    setShow(true);

    emailRef.current && emailRef.current.focus();
  }

  const handleClose = () => {
    setShow(false);
  }

  return (
    <Container
      fluid
      className={classNames('vh-100')}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
      {['sm'].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          fixed="top"
        >
          <Container fluid>
            {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className={classNames(
                    'justify-content-end',
                    'flex-grow-1',
                    'pe-3'
                  )}>
                  <Nav.Link
                    className="text-white"
                    onClick={handleShow}
                  >
                    Sign In
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{
          maxWidth: '20em',
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sign In</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className={classNames(
            'mt-3',
            'text-center',
          )}>Sign in to continue.</p>
          <form className={classNames(
            'mt-5',
          )}>
            <FloatingLabel
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                _ref={emailRef}
              />
            </FloatingLabel>
            <FloatingLabel label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <Stack
              direction="horizontal"
              className={classNames('mt-3')}
            >
              <Button
                variant="outline-dark"
              className={classNames(
                'border-0',
                  'ms-auto',
                  'mt-3'
              )}
              >
                <BoxArrowInRight />
                <span className={classNames('ms-2')}>Sign In</span>
              </Button>
            </Stack>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
      <Row
        className={classNames(
          'align-items-center',
          'vh-100',
          'mx-5'
        )}>
        <Col>
          <span className={classNames(
            'h1',
            'bg-white',
            'px-2',
            'py-1',
            'fw-bold'
          )}>
            Your business, made simple.
          </span>
        </Col>
      </Row>
    </Container>
  );
}

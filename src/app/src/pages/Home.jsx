import { BoxArrowInRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';
import Button from '../components/Button.jsx';
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
import backgroundImage from '../assets/pexels-seven11nash-380769.jpg';
import classNames from 'classnames';

export default function Home() {
  const [show, setShow] = useState(false);

  const emailRef = useRef();

  return (
    <Container
      fluid
      className="vh-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} fixed="top">
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
                  className="justify-content-end flex-grow-1">
                  <Button to="/login">Sign In</Button>
                  <Button className="ms-2" to="/register">Register</Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Row className="align-items-center vh-100 mx-5">
        <Col>
          <span className="h1 bg-white px-2 py-1 fw-bold">
            Stay organised.
          </span>
        </Col>
      </Row>
    </Container>
  );
}

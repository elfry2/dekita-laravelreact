import backgroundImage from "../assets/pexels-apasaric-2506923.jpg";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Row from "react-bootstrap/Row";

export default function HomePage() {
  return (
    <Container
      fluid
      className="vh-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
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
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {[
                    {
                      link: "#1",
                      text: "Register"
                    },
                    {
                      link: "#2",
                      text: "Sign In"
                    },
                  ].map((nav) => (
                      <Nav.Link key={nav.link} className="text-white" href={nav.link}>{nav.text}</Nav.Link>
                    ))}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Row className="align-items-center vh-100 mx-5">
        <Col>
          <span className="h1 bg-white px-2 py-1 fw-bold">Your business, made simple.</span>
        </Col>
      </Row>
    </Container>
  );
}

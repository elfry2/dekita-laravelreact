import { Outlet } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Form() {
  return <Container
    className="mx-auto"
    style={{maxWidth: "24em"}}
  >
    {/* <Row className="align-items-center vh-100"> */}
    <Row className="mt-3">
      <Col><Outlet /></Col>
    </Row>
  </Container>;
}

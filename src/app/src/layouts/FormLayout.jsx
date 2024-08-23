import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function FormLayout ({children}) {
  return <Container
    className="mx-auto"
    style={{maxWidth: "24em"}}
  >
    <Row className="align-items-center vh-100">
      <Col>{children}</Col>
    </Row>
  </Container>;
}

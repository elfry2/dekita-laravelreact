import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function AuthLayout (props) {
	return (
		<Container fluid>
			<Row className="vh-100 justify-content-center align-items-center">
				<Col md="3">
					{props.children}
				</Col>
			</Row>
		</Container>
	);
}

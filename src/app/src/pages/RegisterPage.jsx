import { ChevronLeft } from 'react-bootstrap-icons';
import { PersonAdd } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';

export default function RegisterPage () {

  return <>
    <Link to="/">
      <Button variant="outline-secondary" className="border-0">
        <ChevronLeft /><span className="ms-2">Back</span>
      </Button>
    </Link>
    <FloatingLabel label="Username" className="mt-3">
      <Form.Control type="text" placeholder="Username" autoFocus/>
    </FloatingLabel>
    <FloatingLabel label="Email address" className="mt-3">
      <Form.Control
        type="email"
        placeholder="name@example.com"
        aria-describedby="emailHelpBlock"
      />
      <Form.Text id="emailHelpBlock">
        Verification links will be sent to this address
      </Form.Text>
    </FloatingLabel>
    <FloatingLabel label="Password" className="mt-3">
      <Form.Control type="password" placeholder="Password" />
    </FloatingLabel>
    <FloatingLabel label="Confirm password" className="mt-3">
      <Form.Control type="password" placeholder="Password" />
    </FloatingLabel>
    <Stack className="mt-3" direction="horizontal">
      <Button className="ms-auto" variant="primary">
        <PersonAdd /><span className="ms-2">Register</span>
      </Button>
    </Stack>

  </>
}

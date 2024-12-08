import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DashboardSidebar from '../components/DashboardSidebar.jsx';
import axiosInstance from '../utilities/axios-instance.js';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard({children}) {
  const [authenticatedUser, setAuthenticatedUser] = useState({
    name: null,
  });

  useEffect(() => {
    axiosInstance.get('/user')
      .then(({data}) => setAuthenticatedUser(data))
      .catch(error =>console.error(error));
  });

  return <Container fluid>
    <Row className="mt-3">
      <Col sm="3" style={{maxWidth: "16em"}}>
        <DashboardSidebar />
      </Col>
      <Col>
        {children}
      </Col>
    </Row>
  </Container>
}

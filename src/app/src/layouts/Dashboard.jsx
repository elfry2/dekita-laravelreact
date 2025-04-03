import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DashboardSidenav from '../components/DashboardSidenav.jsx';
import axiosInstance from '../utilities/axios-instance.js';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useGlobal as useGlobalContext } from '../contexts/Global.jsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard({children}) {
  const {
    global: globalContext,
    setGlobal: setGlobalContext,
  } = useGlobalContext();
  
  return <Container fluid>
    <Row>
      <Col sm="2" className="mt-3">
        <DashboardSidenav />
      </Col>
      <Col className="mt-3">
        {
          globalContext.messages && globalContext.messages.map((message) =>
            <Alert variant={message.type} key={message.content} dismissible>
              {message.content}
            </Alert>
          )
        }
        {children}
      </Col>
    </Row>
  </Container>
}

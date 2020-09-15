import React from 'react';
import './Footer.css';
import { Col, Row, Container } from 'react-bootstrap';
import Scroll from '../Others/ScrollBis';

export default function Footer({ userLoggedIn, toggleStatus }) {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col></Col>
          <Col>
            <Scroll></Scroll>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

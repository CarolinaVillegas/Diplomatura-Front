import React from 'react';
import './Footer.css';
import { Dropdown, Button, Col, Row, Container } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import icon from '../../pictures/memeghost2.png';
import userImg from '../../pictures/user.png';
import Login from '../Login/Login';
import Scroll from '../Others/ScrollBis';
export default function Header({ userLoggedIn, toggleStatus }) {
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

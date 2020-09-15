import React, { useState } from 'react';
import {
  Alert,
  Form,
  Button,
  FormGroup,
  FormControl,
  Card,
  Modal,
} from 'react-bootstrap';
import './Login.css';

let login;

export default function Login({ setLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [badLogin, setBadLogin] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  login = setLogin;

  function validateForm() {
    //funcion solamente hecha para debuguear
    return email.length > 0 && password.length > 0;
  }

  function logIn(event) {
    event.preventDefault();

    fetch('/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          // HTTP status code between 200-299
          return response.json();
        } else {
          setBadLogin(true);
          return {};
        }
      })
      .then(({ user, token }) => {
        if (token) {
          if (badLogin) {
            setBadLogin(false);
          }
          localStorage.setItem('name', user.name);
          localStorage.setItem('email', user.email);
          localStorage.setItem('token', token);
          login();
          handleClose();
          setEmail('');
          setPassword('');
        }
      });
  }

  return (
    <React.Fragment>
      <Button variant="primary" className="buttonLogin" onClick={handleShow}>
        Log in
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="Login-Form" onSubmit={logIn}>
            <Card.Title>Enter your email</Card.Title>
            <FormGroup controlId="email">
              <FormControl
                autoComplete="email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <Card.Title>Enter your password</Card.Title>
            <FormGroup controlId="password">
              <FormControl
                autoComplete="current-password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Alert
              variant="danger"
              style={{ display: badLogin ? 'block' : 'none' }}
            >
              Email or password entered is incorrect.
            </Alert>
            <Modal.Footer>
              <Button
                block
                disabled={!validateForm()}
                onClick={logIn}
                type="submit"
              >
                Log in
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

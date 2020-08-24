import React, { useState } from "react";
import { Button, FormGroup, FormControl, Card, Modal } from "react-bootstrap";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function validateForm() {
    //funcion solamente hecha para debuguear
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  }

  return (
    <div className="Login">
      <Button variant="primary" onClick={handleShow}>
        Log in
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <Card.Title>Ingrese su email</Card.Title>
            <FormGroup controlId="email" bsSize="large">
              {/* <ControlLabel>Email</ControlLabel> */}
              <FormControl
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <Card.Title>Ingrese su password</Card.Title>
            <FormGroup controlId="password" bsSize="large">
              {/* <ControlLabel>Password</ControlLabel> */}
              <FormControl
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </FormGroup>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button block bsSize="large" type="submit">
                Log in
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

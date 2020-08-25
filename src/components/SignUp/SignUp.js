import React, { useState } from "react";
import { Button, FormGroup, FormControl, Card, Modal } from "react-bootstrap";
import "./SignUp.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function validateForm() {
    //funcion solamente hecha para debuguear
    return email.length > 0 && password.length > 0 && secondPassword.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  
  fetch("/users", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e));

    setEmail('');
    setPassword('');
    setSecondPassword('');
  }  

  return (
    <div className="SignUp">
      <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <Card.Title>
              Ingrese su email el cual será su nombre de usuario
            </Card.Title>
            <FormGroup controlId="email" >
              {/* <ControlLabel>Email</ControlLabel> */}
              <FormControl
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <Card.Title>Ingrese su password</Card.Title>
            <FormGroup controlId="primaryPassword" >
              {/* <ControlLabel>Password</ControlLabel> */}
              <FormControl
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </FormGroup>

            <Card.Title>Ingrese su password nuevamente</Card.Title>
            <FormGroup controlId="secondPassword" >
              {/* <ControlLabel>Password</ControlLabel> */}
              <FormControl
                value={secondPassword}
                onChange={(e) => setSecondPassword(e.target.value)}
                type="password"
              />
            </FormGroup>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button block disabled={!validateForm()} onClick={handleClose} type="submit">
                Sign Up
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

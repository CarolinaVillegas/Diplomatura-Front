import React, { useState } from "react";

import { Button, FormGroup, FormControl, Card, Modal } from "react-bootstrap";
import "./SignUp.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function validateForm() {
    //funcion solamente hecha para debuguear
    return email.length > 0 && password.length > 7 && name.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e));

    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="SignUp">
      <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className = "form" onSubmit={handleSubmit}>
            <Card.Title>Ingrese su nombre de usuario</Card.Title>
            <FormGroup controlId="name">
              {/* <ControlLabel>Password</ControlLabel> */}
              <FormControl
                value={name}
                required onChange={(e) => setName(e.target.value)}
                type="text"
              />
            </FormGroup>
            <Card.Title>
              Ingrese su email el cual será su nombre de usuario
            </Card.Title>
            <FormGroup controlId="email">
              {/* <ControlLabel>Email</ControlLabel> */}
              <FormControl
                autoFocus
                type="email"
                value={email}
                required onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <Card.Title>Ingrese su password</Card.Title>
            <FormGroup controlId="password">
              {/* <ControlLabel>Password</ControlLabel> */}
              <FormControl
                value={password}
                required onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </FormGroup>

            <Modal.Footer>
              
              <Button
                block
                disabled={!validateForm()}
                onClick={handleClose}
                type="submit"
              >
                Sign Up
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

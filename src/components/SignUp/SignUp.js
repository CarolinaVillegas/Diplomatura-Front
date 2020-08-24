import React, { useState } from "react";
import { Button, FormGroup, FormControl, Card } from "react-bootstrap";
import "./SignUp.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    //funcion solamente hecha para debuguear
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="SignUp">
      <form onSubmit={handleSubmit}>
      <Card.Title>Ingrese su email el cual será su nombre de usuario</Card.Title>
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

        <Card.Title>Ingrese su password nuevamente</Card.Title>
        <FormGroup controlId="password" bsSize="large">
          {/* <ControlLabel>Password</ControlLabel> */}
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>

        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          SignUp
        </Button>
      </form>
    </div>
  );
}

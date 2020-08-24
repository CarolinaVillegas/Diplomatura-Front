import React, { useState } from "react";
import { Button, FormGroup, FormControl, Card } from "react-bootstrap";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <Button block bsSize="large" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}

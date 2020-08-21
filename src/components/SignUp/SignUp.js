import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
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
      <h3 className="card-title text-center">Ingrese su email el cual será su nombre de usuario</h3>
        <FormGroup controlId="email" bsSize="large">
          {/* <ControlLabel>Email</ControlLabel> */}
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <h3 className="card-title text-center">Ingrese su password</h3>
        <FormGroup controlId="password" bsSize="large">
          {/* <ControlLabel>Password</ControlLabel> */}
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>

        <h3 className="card-title text-center">Ingrese su password nuevamente</h3>
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

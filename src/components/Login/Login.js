import React, { useState } from "react";
import { Form, Button, FormGroup, FormControl, Card, Modal } from "react-bootstrap";
import "./Login.css";
//import LogInG from "./components/LogIng";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function validateForm() {
    //funcion solamente hecha para debuguear
    return email.length > 0 && password.length > 0;
  }

  const signIn = () => {

    fetch("/users", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => {
            if(response.ok) {
                return response.json()
            }
            throw new Error("Login inválido...");
        })
        .then(token => {
            localStorage.setItem('token', token);
            props.history.push("/admin");
            return;
        })
        .catch(e => {
            
        }); 

    setEmail("");
    setPassword("");
  }

  function insertGoogleApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    script.onload = () => {
      this.initializeGoogleSignIn();
    };
    document.body.appendChild(script);
  }

  function initializeGoogleSignIn() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2.init({
        client_id:
          "886474662299-pjvv2e3midhh92e51v7hrlgn49mr5mvp.apps.googleusercontent.com",
      });
      console.log("Api inited");

      window.gapi.load("signin2", () => {
        const params = {
          onsuccess: () => {
            console.log("User has finished signing in!");
          },
        };
        window.gapi.signin2.render("loginButton", params);
      });
    });
  }

  function componentDidMount() {
    console.log("Loading");
    this.insertGoogleApi();
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
          <Form >
            <Card.Title>Ingrese su email</Card.Title>
            <FormGroup controlId="email">
              <FormControl
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <Card.Title>Ingrese su password</Card.Title>
            <FormGroup controlId="password">
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
              <Button block type="submit">
                Sign in with Google
              </Button>

              <Button
                block
                disabled={!validateForm()}
                 onClick={signIn}
                type="submit"
              >
                Log in
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

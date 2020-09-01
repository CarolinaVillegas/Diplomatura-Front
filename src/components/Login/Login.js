import React, { useState } from "react";
import {
  Alert,
  Form,
  Button,
  FormGroup,
  FormControl,
  Card,
  Modal,
} from "react-bootstrap";
import "./Login.css";
//import GoogleLogin from "react-google-login";
//import LogInG from "./components/LogIng";

let login;

export default function Login({ setLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    fetch("/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
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
      .then(({ token }) => {
        if (token) {
          if (badLogin) {
            setBadLogin(false);
          }
          localStorage.setItem("email", email);
          localStorage.setItem("token", token);
          login();
          handleClose();
          setEmail("");
          setPassword("");
        }
      });
  }

  /*function insertGoogleApi() {
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
  }*/

  function responseGoogle(response) {
    console.log(this.response);
    console.log(this.response.profileObj);
  }

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow}>
        Log in
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="Login-Form" onSubmit={logIn}>
            <Card.Title>Ingrese su email</Card.Title>
            <FormGroup controlId="email">
              <FormControl
                autoComplete="email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <Card.Title>Ingrese su password</Card.Title>
            <FormGroup controlId="password">
              {/* <ControlLabel>Password</ControlLabel> */}
              <FormControl
                autoComplete="current-password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Alert
              variant="danger"
              style={{ display: badLogin ? "block" : "none" }}
            >
              El email o la contraseña ingresados son incorrectos.
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
              <Button>Sign in with Google</Button>
              {/*
              <GoogleLogin
              //client secret: YmddoOJzu-Pn6Z4-rZPuq0Bi
              clientId="282838883290-bvn9b680k2srb84k08jddmvv9e02qav4.apps.googleusercontent.com"
              buttonText="Log in with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_hosy_origin"}
            />*/}
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

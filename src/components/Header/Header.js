import React from "react";
import "./Header.css";
import {Col, Row, Button} from "react-bootstrap";
import icon from "../../pictures/memeghost2.png";

export default function Header(props) {
  return (
    <header>
      {/* <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Username:
          <span className="badge badge-pill badge-light ml-2">
            Posts: {props.userData.length}
          </span>
        </a>
      </nav> */}
      <Row>
        <Col md={9} className="titleAndIcon">
          <h1 className="title">
            {" "}
            Meme Ghost
            <img className="icono" alt="" src={icon} />
          </h1>
        </Col>
        <Col md={3} className=" buttons">
          <Button className="loginIn" onClick={props.click}>
            Login In
          </Button>
          <Button className="signUp">Sign Up</Button>
        </Col>
      </Row>
    </header>
  );
}

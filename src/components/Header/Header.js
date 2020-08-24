import React from "react";
import "./Header.css";
import {Col, Row} from "react-bootstrap";
import icon from "../../pictures/memeghost2.png";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
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
        <Col md={10} className="titleAndIcon">
          <h1 className="title">
            {" "}
            Meme Ghost
            <img className="icono" alt="" src={icon} />
          </h1>
        </Col>
        <Col md={1} className=" buttons">
        <Login></Login>
        </Col>
        <Col md={1} className=" buttons">
        <SignUp></SignUp>
        </Col>
        
      </Row>
    </header>
  );
}

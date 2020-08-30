import React from "react";
import "./Header.css";
import { Col, Row, Container } from "react-bootstrap";
import icon from "../../pictures/memeghost2.png";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import SignUp2 from "../SignUp/SignUp2";

export default function Header({ userLoggedIn, toggleStatus }) {
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
      <Container>
        <Row>
          <Col md={10} className="titleAndIcon">
            <h1 className="title">
              {" "}
              Meme Ghost
              <img className="icono" alt="" src={icon} />
            </h1>
          </Col>
          {userLoggedIn ? (
            <React.Fragment>
              <Col md="auto">{localStorage.getItem("email")}</Col>
              <Logout setLogout={toggleStatus} />
            </React.Fragment>
          ) : (
            <Row className="visitor-function">
              <Col md={5} className=" buttons">
                <Login setLogin={toggleStatus}></Login>
              </Col>
              <Col md={5} className=" buttons">
                <SignUp2></SignUp2>
              </Col>
            </Row>
          )}
        </Row>
      </Container>
    </header>
  );
}

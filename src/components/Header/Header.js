import React from "react";
import "./Header.css";
import { Col, Row, Container } from "react-bootstrap";
import icon from "../../pictures/memeghost2.png";
import userImg from "../../pictures/user.png";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import SignUp from "../SignUp/SignUp";
import CreateMeme from "../CreateMeme/CreateMeme";

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
              <Row className="visitor-function createAndLogout">
                {/* <Col md={1} className="emailLogin">
              <img className="icono user" alt="" src={userImg} />
                {localStorage.getItem("email")}
              </Col> */}
                <Col md={5} className=" createMeme">
                  <CreateMeme />
                </Col>
                <Col md={5} className=" logout">
                  <Logout setLogout={toggleStatus} />
                </Col>
              </Row>
            </React.Fragment>
          ) : (
            <Row className="visitor-function loginSignUp">
              <Col md={5} className=" loginIn">
                <Login setLogin={toggleStatus}></Login>
              </Col>
              <Col md={5} className=" signUp">
                <SignUp></SignUp>
              </Col>
            </Row>
          )}
        </Row>
      </Container>
    </header>
  );
}

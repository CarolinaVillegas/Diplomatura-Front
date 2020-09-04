import React from "react";
import "./Header.css";
import { Dropdown, Button, Col, Row, Container } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import icon from "../../pictures/memeghost2.png";
import userImg from "../../pictures/user.png";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import SignUp2 from "../SignUp/SignUp2";
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
      <Container fluid="">
        <Row md="6">
          {userLoggedIn ? (
            <React.Fragment>
              <Col></Col>
              <Col></Col>
              <Col xs={6} className="titleAndIcon">
                <h1 className="text-center">
                  {"         "}
                  {"         "}
                  Meme Ghost
                  <img className="icono" alt="" src={icon} />
                </h1>
              </Col>
              <Col md={1} className=" header-user">
                <Dropdown alignRight="false" className="dropdownOutSideUser">
                  <Dropdown.Toggle
                    className="dropdownUser"
                    variant="info"
                    id="dropdown-basic"
                    size="sm"
                  >
                    <FaUserCircle className="iconoUser" />
                    {/*localStorage
                        .getItem("email")
                        .substring(
                          0,
                          localStorage.getItem("email").lastIndexOf("@")
                        )*/}
                  </Dropdown.Toggle>
                  <Dropdown.Menu >
                    <Dropdown.Item href="#/action-1">
                      My Profile
                      {/*localStorage
                        .getItem("email")
                      */}
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">
                      <Logout setLogout={toggleStatus} />
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col md={1}>
                <CreateMeme/>
              </Col>
            </React.Fragment>
          ) : (
            <Row className="visitor-function loginSignUp">
              <Col md={10} className="titleAndIcon">
                <h1 className="title">
                  {" "}
                  Meme Ghost
                  <img className="icono" alt="" src={icon} />
                </h1>
              </Col>

              <Col md={1} className=" loginIn">
                <Login setLogin={toggleStatus}></Login>
              </Col>
              <Col md={1} className=" signUp">
                <SignUp2></SignUp2>
              </Col>
            </Row>
          )}
        </Row>
      </Container>
    </header>
  );
}

import React from 'react';
import './Header.css';
import { Dropdown, Col, Row, Container } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import icon from '../../pictures/memeghost2.png';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import SignUp from '../SignUp/SignUp';
import CreateMeme from '../CreateMeme/CreateMeme';

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
      <Container fluid>
        <Row>
          {userLoggedIn ? (
            <React.Fragment>
              <Col className="titleAndIcon">
                <a href="/" style={{ textDecoration: 'none' }}>
                  <div class="animate six">
                    <span>M</span>
                    <span>e</span>
                    <span>m</span>
                    <span>e</span> &nbsp;
                    <span>G</span>
                    <span>h</span>
                    <span>o</span>
                    <span>s</span>
                    <span>t</span>
                    <span>
                      <img className="icono" alt="" src={icon} />
                    </span>
                  </div>
                </a>
              </Col>
              <Col md={1} className=" header-user">
                <Dropdown className="dropdownOutSideUser">
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
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/MyProfile">My Profile</Dropdown.Item>
                    <Dropdown.Item href="#/Settings">Settings</Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item href="#/LogOut">
                      <Logout setLogout={toggleStatus} />
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col md={1}>
                <CreateMeme />
              </Col>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Col className="titleAndIcon">
                <a href="/" style={{ textDecoration: 'none' }}>
                  <div className="animate six">
                    <span>M</span>
                    <span>e</span>
                    <span>m</span>
                    <span>e</span> &nbsp;
                    <span>G</span>
                    <span>h</span>
                    <span>o</span>
                    <span>s</span>
                    <span>t</span>
                    <span>
                      <img className="icono" alt="" src={icon} />
                    </span>
                  </div>
                </a>
              </Col>
              <Col md={1}>
                <Login setLogin={toggleStatus}></Login>
              </Col>
              <Col md={1}>
                <SignUp />
              </Col>
            </React.Fragment>
          )}
        </Row>
      </Container>
    </header>
  );
}

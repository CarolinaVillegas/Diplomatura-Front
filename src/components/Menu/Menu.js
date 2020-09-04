import React from "react";
import { Dropdown, Card, Nav, Col, Row } from "react-bootstrap";
import "./Menu.css";
import userImg from "../../pictures/user.png";
import { FaUserCircle } from "react-icons/fa";

export default function Menu({ userLoggedIn, filterMemes }) {
  return (
    <div>
        {userLoggedIn ? (
    <div>
      <Card style={{ width: "18rem" }} className=" boxUser">
          <Card.Body>
            <Col sm="auto" className="usuarioInfo" align="center">
              <FaUserCircle className="iconoUser" alignmentBaseline="center" />
            <p>{localStorage
                .getItem("email")
                /*.substring(0, localStorage.getItem("email").lastIndexOf("@"))*/}</p>
                <p>Total Likes</p>
            </Col>
          </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className=" boxMenuLogin">
        <Dropdown className="category">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Category
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <div onClick={() => filterMemes("general")}>General</div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div onClick={() => filterMemes("random")}>Random</div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div onClick={() => filterMemes("política")}>Politics</div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div onClick={() => filterMemes("deportes")}>Sports</div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div onClick={() => filterMemes("animales")}>Animals</div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div onClick={() => filterMemes("gaming")}>Gaming</div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div onClick={() => filterMemes("anime")}>Anime</div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Nav className="flex-column">
          <Nav.Item>
            <Nav.Link className="active menuItem" href="">
              Contact Us
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className=" menuItem" href="">
              Help - FAQ
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="menuItem" href="">
              About Us
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card>
      <Card style={{ width: "18rem" }} className="boxTermsLogin">
        <a className="text">Privacy Policy</a>
        <a className="text">Terms</a>
        <a className="text">Content Pollicy</a>
        <a className="text">Meme Ghost @ 2020 All Rights Reserved</a>
      </Card>
          </div>
        ) : (
        <div>
        <Card style={{ width: "18rem" }} className=" boxMenu">
        <Dropdown className="category">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Category
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <div onClick={() => filterMemes("general")}>General</div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div onClick={() => filterMemes("random")}>Random</div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div onClick={() => filterMemes("política")}>Politics</div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div onClick={() => filterMemes("deportes")}>Sports</div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div onClick={() => filterMemes("animales")}>Animals</div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div onClick={() => filterMemes("gaming")}>Gaming</div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div onClick={() => filterMemes("anime")}>Anime</div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Nav className="flex-column">
          <Nav.Item>
            <Nav.Link className="active menuItem" href="">
              Contact Us
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className=" menuItem" href="">
              Help - FAQ
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="menuItem" href="">
              About Us
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card>
      <Card style={{ width: "18rem" }} className="boxTerms">
        <a className="text">Privacy Policy</a>
        <a className="text">Terms</a>
        <a className="text">Content Pollicy</a>
        <a className="text">Meme Ghost @ 2020 All Rights Reserved</a>
      </Card>
      </div>
        )}
    </div>
  );
}

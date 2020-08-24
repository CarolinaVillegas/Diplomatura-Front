import React from "react";
import { Dropdown, Card, Nav } from "react-bootstrap";
import "./Menu.css";

export default function Menu(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }} className=" boxMenu">

          <Dropdown className="category">
            <Dropdown.Toggle variant="success" id="dropdown-basic" >
              Categoría
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <div onClick={() => props.filterMemes("general")}>General</div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div onClick={() => props.filterMemes("random")}>Random</div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div onClick={() => props.filterMemes("política")}>
                  Política
                </div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div onClick={() => props.filterMemes("deportes")}>
                  Deportes
                </div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div onClick={() => props.filterMemes("animales")}>
                  Animales
                </div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div onClick={() => props.filterMemes("gaming")}>Gaming</div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div onClick={() => props.filterMemes("anime")}>Anime</div>
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
  );
}

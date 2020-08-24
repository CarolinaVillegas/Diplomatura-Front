import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./Menu.css";

export default function Menu(props) {
  return (
    <div>
      <div className="card w-75 boxMenu">
        <div className="dropdown category">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
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
        </div>
        <ul className="nav flex-column">
          <li className="nav-item ">
            <a className="nav-link active menuItem" href="">
              Contact Us
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link menuItem" href="">
              Help - FAQ
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link menuItem" href="">
              About Us
            </a>
          </li>
        </ul>
      </div>
      <div className="card w-75 boxTerms">
        <a>Privacy Policy</a>
        <a>Terms</a>
        <a>Content Pollicy</a>
        <a>Meme Ghost @ 2020 All Rights Reserved</a>
      </div>
    </div>
  );
}

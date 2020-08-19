import React from "react";
import "./Menu.css";

export default function Header(props) {
  return (
    <div>
      <div className="card w-75 boxMenu">
        <div className="dropdown category">
          <button
            className="btn btn-secondary dropdown-toggle botonCategory"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Category:
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item ">
            <a className="nav-link active menuItem" href="#">
              Contact Us
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link menuItem" href="#">
              Help - FAQ
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link menuItem" href="#">
              About Us
            </a>
          </li>
        </ul>
      </div>
      <div className="card w-75 boxTerms">
        <a>Privacy Pollicy</a>
        <a>Terms</a>
        <a>Content Pollicy</a>
        <a>Meme Ghost @ 2020 All Rights Reserved</a>
      </div>
    </div>
  );
}

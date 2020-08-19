import React from "react";
import "./Header.css";
import icon from "../../pictures/memeghost.png";

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
      <div className = "row">
      <div className="col-sm titleAndIcon">
        <h1 className="title"> Meme Ghost
        <img className="icono" src={icon} /></h1>
      </div>
      <div className = "col-sw buttons">
        <button className="loginIn">Login In</button>
        <button className="signIn">Sign In</button>
      </div>
      </div>
    </header>
  );
}

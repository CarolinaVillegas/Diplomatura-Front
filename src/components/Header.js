import React from "react";

export default function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Username:
          <span className="badge badge-pill badge-light ml-2">
            Posts: {props.userData.length}
          </span>
        </a>
      </nav>
    </header>
  );
}

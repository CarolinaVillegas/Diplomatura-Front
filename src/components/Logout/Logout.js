import React from "react";
import { Button } from "react-bootstrap";

export default function Logout(props) {
  return (
    <React.Fragment>
      <Button
        variant="primary"
        onClick={(e) => handleLogout(e, props.setLogout)}
      >
        Log out
      </Button>
    </React.Fragment>
  );
}

function handleLogout(event, logOut) {
  event.preventDefault();

  fetch("/users/logoutAll", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("token"),
    },
  }).then((response) => {
    if (response.ok) {
      logOut();
    }
  });
}

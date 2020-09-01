import React, { useState } from "react";
import {
  Dropdown,
  Form,
  Button,
  FormGroup,
  FormControl,
  Card,
  Modal,
} from "react-bootstrap";
import Upload from "./Upload.js";
//import GoogleLogin from "react-google-login";
//import LogInG from "./components/LogIng";

let login;

export default function CreateMeme({ }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [show, setShow] = useState(false);
  const [badLogin, setBadLogin] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //login = setLogin;
  function logIn(event) {
   
  }

return(
    <React.Fragment>
      <Button variant="primary" onClick={handleShow}>
        Create meme!
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create you meme!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="CreateMeme-Form" /*onSubmit={logIn}*/>
            <Card.Title>Title</Card.Title>
            <FormGroup controlId="title">
              <FormControl
                value={title}
                type="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>
            <Card.Title>Description</Card.Title>
            <FormGroup controlId="description">
              <FormControl
                value={description}
                type="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormGroup>

            <Card.Title>Category</Card.Title>
            <Card.Title>Imagen</Card.Title>
            <Upload/>

            <Modal.Footer>
              <Button
                block
                // disabled={!validateForm()}
                onClick={logIn}
                type="submit"
              >
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

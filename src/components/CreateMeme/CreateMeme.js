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
//import Upload from "./Upload.js";
//import GoogleLogin from "react-google-login";
//import LogInG from "./components/LogIng";

let login;

export default function CreateMeme({}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [show, setShow] = useState(false);
  const [badLogin, setBadLogin] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSave(event) {
    event.preventDefault();

    const formData = new FormData();
    const fileField = document.querySelector("input[type='file']");

    formData.append("title", title);
    formData.append("category", "anime");
    formData.append("img_source", fileField.files[0]);

    fetch("/memes", {
      method: "POST",
      body: formData,
      headers: { "x-access-token": localStorage.getItem("token") },
    })
      .then((data) => data.json())
      .then((response) => console.log(response))
      .catch((e) => console.log("Error: ", e));
  }

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow}>
        Upload meme
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload your own meme!</Modal.Title>
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
            <Form.File id="image-file" label="Seleccionar imagen" custom />

            <Modal.Footer>
              <Button
                block
                // disabled={!validateForm()}
                onClick={handleSave}
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

import React, { useState } from 'react';
import {
  Dropdown,
  Form,
  Button,
  FormGroup,
  FormControl,
  Card,
  Modal,
  Label,
} from 'react-bootstrap';
import { WiCloudUp } from 'react-icons/wi';

import './CreateMeme.css';
//import Upload from "./Upload.js";
//import GoogleLogin from "react-google-login";
//import LogInG from "./components/LogIng";

let login;

export default function CreateMeme({}) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('general');
  const [show, setShow] = useState(false);
  const [badLogin, setBadLogin] = useState(false);
  // const forceUpdate = React.useCallback(() => updateState({}), []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSave(event) {
    event.preventDefault();

    const formData = new FormData();
    const fileField = document.querySelector("input[type='file']");

    formData.append('title', title);
    formData.append('category', category);
    formData.append('img_source', fileField.files[0]);

    fetch('/memes', {
      method: 'POST',
      body: formData,
      headers: { 'x-access-token': localStorage.getItem('token') },
    })
      .then((data) => data.json())
      .then((response) => window.location.reload())
      .catch((e) => console.log('Error: ', e));
  }

  return (
    <React.Fragment>
      <Button className="createMeme" onClick={handleShow}>
        <div className="left"></div>
        Upload meme
        <div className="right"></div>
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
            <Form.Group controlId="category">
              <Card.Title>Category</Card.Title>
              <Form.Control
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>general</option>
                <option>random</option>
                <option>política</option>
                <option>deportes</option>
                <option>animales</option>
                <option>gaming</option>
                <option>anime</option>
              </Form.Control>
            </Form.Group>
            <Card.Title>Image</Card.Title>
            <Form.File
              id="image-file"
              label="Seleccionar imagen de formato .jpg, .jpeg, .png o .GIF"
              custom
            />

            <Modal.Footer>
              <Button onClick={handleSave} type="submit" block>
                Upload
                {/*<WiCloudUp className="uploadImg" size={30} align="center"/>*/}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

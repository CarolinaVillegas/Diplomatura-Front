import React from "react";
import {
  Col,
  Card,
  Button,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import "./Comments.css";

export default function Comments({ user, meme }) {
  return (
    <div className="comments">
      <Col sm={6} md={8}>
        {/* <Card style={{ width: "35rem" }} className="cardPrimary">
      <Card.Title className="cardTitle">{meme.title}</Card.Title>
      <Card.Subtitle className="cardSubtitle">{meme.category}</Card.Subtitle>
      <Card.Img src={meme.img_source} alt={meme.title} loading="lazy" />
      <Card.Body>
        Puntos: {meme.points} <br />
        Comentarios: {meme.comment_counter}
        <Card.Footer> */}
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Leave your comment</Form.Label>
          <InputGroup >
            <InputGroup.Prepend>
              <Button className="buttonComment"> Submit </Button>
            </InputGroup.Prepend>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              placeholder="Write something..."
            />
          </InputGroup>
        </Form.Group>

        {/* </Card.Footer>
      </Card.Body>
    </Card> */}
      </Col>
      <Col>aca tienen que mostrarse los comentarios que ya se hicieron </Col>
    </div>
  );
}

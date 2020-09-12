import React, { useState } from 'react';
import moment from 'moment';

import {
  Col,
  Card,
  Button,
  Form,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

import './Comments.css';

moment().format();

export default function Comments({ listOfComments, memeID }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(listOfComments);

  function handleSave(event) {
    event.preventDefault();

    fetch(`/comments/${memeID}`, {
      method: 'POST',
      headers: {
        'x-access-token': localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: comment }),
    })
      .then((data) => data.json())
      .then((newComment) => {
        setComments([newComment.comment, ...listOfComments]);
        setComment('');
      })
      .catch((e) => console.log(e));
  }

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
          <InputGroup>
            <InputGroup.Prepend>
              <Button className="buttonComment" onClick={handleSave}>
                {' '}
                Submit{' '}
              </Button>
            </InputGroup.Prepend>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              placeholder="Write something..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </InputGroup>
        </Form.Group>

        {/* </Card.Footer>
      </Card.Body>
    </Card> */}
      </Col>
      <Col>
        {comments.map((comment, i) => {
          return (
            <Card key={i} bg={'dark'} text="light">
              <Card.Text>{comment.message}</Card.Text>
              <Card.Header>
                {comment.owner} @ {moment(comment.createdAt).fromNow()}
              </Card.Header>
            </Card>
          );
        })}
      </Col>
    </div>
  );
}

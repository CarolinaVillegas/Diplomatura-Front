import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import "./Meme.css";

export default function Meme({ userData, addVoteHandler, removeVoteHandler }) {
  const data = userData.map((meme, i) => (
    <Col sm={6} md={8} key={i}>
      <Card style={{ width: "35rem" }} className="cardPrimary">
        <Card.Title className="cardTitle">{meme.title}</Card.Title>
        <Card.Subtitle className="cardSubtitle">{meme.category}</Card.Subtitle>
        <Card.Img src={meme.img_source} alt={meme.title} loading="lazy" />
        <Card.Body>
          Puntos: {meme.points} <br />
          Comentarios: {meme.comment_counter}
          <Card.Footer>
            <Button
              variant="success"
              className="botonesLike"
              onClick={() => addVoteHandler(meme)}
            >
              Like
            </Button>
            <Button
              variant="danger"
              className="botonesLike"
              onClick={() => removeVoteHandler(meme)}
            >
              DisLike
            </Button>
            <Button className = "buttonComment">
              Comment 
            </Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  ));

  return data;
}

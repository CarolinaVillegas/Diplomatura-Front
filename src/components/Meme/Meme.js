import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import './Meme.css';
import { IoIosText, IoIosThumbsDown, IoIosThumbsUp } from 'react-icons/io';
import Comments from '../Comments/Comments';

export default function Meme({
  memes,
  addVoteHandler,
  removeVoteHandler,
  showCommentHandler,
}) {
  const data = memes.map((meme, i) => (
    <Col  key={i}>
      <Card className="cardPrimary">
        <Card.Title className="cardTitle">{meme.title}</Card.Title>
        <Card.Subtitle className="cardSubtitle">{meme.category}</Card.Subtitle>
        <Card.Img
          className="cardIMG"
          src={meme.img_source}
          alt={meme.title}
          loading="lazy"
        />
        <Card.Body className="cardBody">
          Votes: {meme.points} <br />
          Comments: {meme.comment_counter}
          <Card.Footer>
            <Button
              variant="success"
              className="botonesLike"
              //disabled={false}
              onClick={() => addVoteHandler(meme)}
            ><IoIosThumbsUp className="dedoLike"/>
              Like
            </Button>
            <Button
              variant="danger"
              className="botonesLike"
              //disabled={false}
              onClick={() => removeVoteHandler(meme)}
            >
              <IoIosThumbsDown className="dedoDislike" /> Dislike
            </Button>
            <Button
              variant="light"
              className="buttonComment"
              onClick={() => showCommentHandler(meme)}
              /*cambiar a una ruta que lleve a ese meme individual y al comentario hay que pasar el meme y el usuario que va a comentar meme={
                meme
              }
              user={userData}*/
            >
              <IoIosText className="commentGlobe" /> Comment
            </Button>
          </Card.Footer>
          {meme.showComment ? (
            <Comments listOfComments={meme.comentarios} memeID={meme._id} />
          ) : (
            <br />
          )}
        </Card.Body>
      </Card>
    </Col>
  ));

  return data;
}

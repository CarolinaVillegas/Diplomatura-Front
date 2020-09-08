import React, { Component,  useState  }  from "react";
import { Col, Card, Button } from "react-bootstrap";
import "./Meme.css";
import {IoIosText, IoIosThumbsDown, IoIosThumbsUp } from "react-icons/io";




export default function Meme({ userData, addVoteHandler, removeVoteHandler }) {
 /* const [disabled, setDisabled] = useState(false);
  
  function handleClickLike(meme) {    
   setDisabled(true);
    addVoteHandler(meme);
  }
 /* function handleClickDislike(meme) {    
    setDisabled(true);
    removeVoteHandler(meme);
  }*/

  const data = userData.map((meme, i) => (
    <Col sm={6} md={8} key={i}>
      <Card style={{ width: "35rem" }} className="cardPrimary">
        <Card.Title className="cardTitle">{meme.title}</Card.Title>
        <Card.Subtitle className="cardSubtitle">{meme.category}</Card.Subtitle>
        <Card.Img src={meme.img_source} alt={meme.title} loading="lazy" />
        <Card.Body>
         Votes: {meme.points} <br />
         Comments: {meme.comment_counter}
          <Card.Footer>
            <Button
              variant="success"
              className="botonesLike"
              disabled={disabled}
              onClick={() => handleClickLike(meme)}
            ><IoIosThumbsUp className="dedoLike"/>
              Like
            </Button>
            <Button
              variant="danger"
              className="botonesLike"
              onClick={() => removeVoteHandler(meme)}
            >
             <IoIosThumbsDown className="dedoDislike"/> Dislike
            </Button>
            <Button className="buttonComment" /*cambiar a una ruta que lleve a ese meme individual y al comentario hay que pasar el meme y el usuario que va a comentar*/ meme = {meme} user = {userData}>
            <IoIosText className="commentGlobe"/>   Comment
            </Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  ));

  return data;
}

import React, { Component } from "react";

// import google from "pictures/google.png"
// import memeclown from "pictures/memeclown.png";
import "./App.css";
//import './assets/css/fonts.css';
// data
import { data } from "./data.json";
import { Container, Row, Col } from "react-bootstrap";
// subcomponents
import CreateMeme from "./components/CreateMeme";
import Header from "./components/Header/Header";
import Meme from "./components/Meme/Meme";
import Menu from "./components/Menu/Menu";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Scroll from "./components/Scroll";
import Routes from "./Routes/routes";
import { Router } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      currentUser: null,
    };
  }

  addVote(meme) {
    const newData = this.state.data.map((m) => {
      if (m.title === meme.title) {
        return {
          ...m,
          votes: m.votes + 1,
        };
      }

      return {
        ...m,
      };
    });

    this.setState({ data: newData });
  }

  removeVote(meme) {
    const newData = this.state.data.map((m) => {
      if (m.title === meme.title) {
        return {
          ...m,
          votes: m.votes - 1,
        };
      }

      return {
        ...m,
      };
    });

    this.setState({ data: newData });
  }

  componentDidMount() {
    fetch("/memes")
      .then((rawMemes) => rawMemes.json())
      .then((data) => {
        console.log(data);
        this.setState({ data });
      });
  }

  handleAddTodo(todo) {
    this.setState({
      data: [...this.state.data, todo],
    });
  }

  // filtra los memes de la bd por la categoria asignada
  showMemesByCategory = async (category) => {
    const rawMemes = await fetch("/memes");
    const memes = await rawMemes.json();
    const filteredMemes = memes.filter((meme) => meme.category === category);

    this.setState({ data: filteredMemes });
  };

  render() {
    return (
      <div className="App">
        <Header
        //userData={this.state.data}
        />
        {/* <Routes/> */}
        <Container fluid>
          <Row>
            {/*<CreateMeme onAddTodo={this.handleAddTodo} />*/}
            <Col md={4} className="menuBox">
              <Menu filterMemes={this.showMemesByCategory} />
            </Col>
            <Col sm={6} md={8}>
              <article>
                <Meme
                  userData={this.state.data}
                  addVoteHandler={this.addVote.bind(this)}
                  removeVoteHandler={this.removeVote.bind(this)}
                />
              </article>
            </Col>
            <Col md={8}></Col>
            <Col md={1}>
              <Scroll></Scroll>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

/* Google thing
<div className="row mt-4">
  <div className="col-md-4 text-center">
    <img src={google} className="App-logo" alt="logo" />
    <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
  </div>
</div>
*/

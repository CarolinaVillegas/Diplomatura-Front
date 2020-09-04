import React, { Component } from "react";

// import google from "pictures/google.png"
// import memeclown from "pictures/memeclown.png";
import "./App.css";
//import './assets/css/fonts.css';
// data
import { data } from "./data.json";
import { Button, Container, Row, Col } from "react-bootstrap";

// subcomponents
//import CreateMeme from "./components/CreateMeme";
import Header from "./components/Header/Header";
import Meme from "./components/Meme/Meme";
import Menu from "./components/Menu/Menu";
//import Login from "./components/Login/Login";
//import SignUp from "./components/SignUp/SignUp";
import Comments from "./components/Comments/Comments";
import Scroll from "./components/Others/Scroll";
//import Routes from "./Routes/routes";
//import { Router } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      currentUser: null,
      userIsLoggedIn: false,
    };
  }

  addVote(meme) {
    if (localStorage.getItem("email")) {
      const nuevaLista = [...this.state.data]; // copia de los datos

      const indice = nuevaLista.findIndex((m) => m._id === meme._id);

      fetch("/memes/" + nuevaLista[indice]._id + "?increase=true", {
        method: "PATCH",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((e) => {
        nuevaLista[indice] = {
          ...nuevaLista[indice],
          points: nuevaLista[indice].points + 1,
        };

        this.setState({ data: nuevaLista });
      });
    }
  }

  removeVote(meme) {
    if (localStorage.getItem("email")) {
      const nuevaLista = [...this.state.data]; // copia de los datos

      const indice = nuevaLista.findIndex((m) => m._id === meme._id);

      fetch("/memes/" + nuevaLista[indice]._id + "?increase=false", {
        method: "PATCH",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((e) => {
        nuevaLista[indice] = {
          ...nuevaLista[indice],
          points: nuevaLista[indice].points - 1,
        };

        this.setState({ data: nuevaLista });
      });
    }
  }

  toggleUserStatus() {
    if (this.state.userIsLoggedIn) {
      localStorage.clear();
      this.setState({ userIsLoggedIn: false });
    } else {
      this.setState({ userIsLoggedIn: true });
    }
  }

  componentDidMount() {
    if (localStorage.getItem("email")) {
      this.setState({ userIsLoggedIn: true });
    }

    fetch("/memes")
      .then((rawMemes) => rawMemes.json())
      .then((memes) => {
        const data = memes.reverse();
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
          userLoggedIn={this.state.userIsLoggedIn}
          toggleStatus={this.toggleUserStatus.bind(this)}
        />
        {/* <Routes/> */}
        <Container fluid>
          <Row>
            {/*<CreateMeme onAddTodo={this.handleAddTodo} />*/}
            
            <Col md={4} className="menuBox">
              
              <Menu
                filterMemes={this.showMemesByCategory}
                userLoggedIn={this.state.userIsLoggedIn}
              />
            </Col>
            <Col sm={6} md={8}>
              <article className="memePosition">
                <Meme
                  userData={this.state.data}
                  addVoteHandler={this.addVote.bind(this)}
                  removeVoteHandler={this.removeVote.bind(this)}
                />
                {/* <Comments></Comments> */}
              </article>
            </Col>
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

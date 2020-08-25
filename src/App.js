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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      isLogin: true,
      isSignUp: false,
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

  setLogin() {
    console.log(this.state.isLogin);
    if (this.state.isLogin) {
      this.setState({ isLogin: false });
    } else {
      this.setState({ isLogin: true });
    }
  }

  setSignUp() {
    console.log(this.state.isSignUp);
    if (this.state.isSignUp) {
      this.setState({ isSignUp: false });
    } else {
      this.setState({ isSignUp: true });
    }
  }

  componentDidMount() {
    fetch("/memes")
      .then((rawMemes) => rawMemes.json())
      .then((data) => {
        console.log(data);
        this.setState({ data });
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
    if (this.state.isLogin && !this.state.isSignUp) {
      return (
        <div className="App">
          <Header
            userData={this.state.data}
            click={() => this.setLogin() /*|| this.setSignUp*/}
            //click = {()=> this.setSignUp()}
          />
          <Container fluid>
            <Row>
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
              <Col md = {1}>
                <Scroll></Scroll>
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else {
      if (this.state.isSignUp === false && this.state.isLogin === true) {
        return (
          <div className="App">
            <Header userData={this.state.data} click={() => this.setSignUp()} />
            <Container>
              <Row>
                <Col md={4} className="menuBox">
                  <Menu />
                </Col>
                <Col md={8}>
                  <SignUp />
                </Col>
              </Row>
            </Container>
          </div>
        );
      } else {
        return (
          <div className="App">
            <Header userData={this.state.data} click={() => this.setLogin()} />            
            <Container fluid>
              <Row>
                <Col md={4} className="menuBox">
                  <Menu /> 
                  <CreateMeme />                 
                </Col>
                <Col md={8}>
                  <Login />
                </Col>
              </Row>
            </Container>
          </div>
        );
      }
    }
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

import React, { Component } from "react";
// import google from "pictures/google.png"
// import memeclown from "pictures/memeclown.png";
import "./App.css";
//import './assets/css/fonts.css';
// data
import { data } from "./data.json";

// subcomponents
import TodoForm from "./components/TodoForm";
import Header from "./components/Header/Header";
import Meme from "./components/Meme";
import Menu from "./components/Menu/Menu";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
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

  removeTodo(index) {
    this.setState({
      data: this.state.data.filter((e, i) => {
        return i !== index;
      }),
    });
  }

  handleAddTodo(todo) {
    this.setState({
      data: [...this.state.data, todo],
    });
  }

  render() {
    return (
      <div className="App">
        <Header userData={this.state.data} />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Menu />
            </div>
            <div className="col-md-8">
              <article>
                <Meme
                  userData={this.state.data}
                  addVoteHandler={this.addVote.bind(this)}
                  removeVoteHandler={this.removeVote.bind(this)}
                />
              </article>
            </div>
          </div>
        </div>
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

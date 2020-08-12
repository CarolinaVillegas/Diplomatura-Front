import React, { Component } from "react";
import google from "./google.png";
import memeclown from "./memeclown.png";
import "./App.css";
//import './assets/css/fonts.css';
// data
import { data } from "./data.json";

// subcomponents
import TodoForm from "./components/TodoForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data,
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
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
    const data = this.state.data.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.category}
              </span>
            </div>
            <div className="card-body">{todo.category}</div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    });

    // RETURN THE COMPONENT
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Username:
            Posts:
            <span className="badge badge-pill badge-light ml-2">
              {this.state.data.length}
            </span>
          </a>
        </nav>

        <div className="container">
         
            <div class="text-center">
              <h1>Meme Clown</h1>
              <img src={memeclown} className="App-logo" alt="logo" />
            </div>
          

          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={google} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

           
        </div>

        <div className="container">  
              <div className="row">{data}</div>
            
          </div></div>




      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      image: "",
      description: "",
      category: "General",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      title: "",
      image: "",
      description: "",
      category: "General",
    });
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;
    console.log(value, name);
    this.setState({
      [name]: value,
    });
  };

  handleFileSelected = (event) => {
    const { value, name } = event.target;
    console.log(value, name);
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="file"
              name="image"
              className="form-control"
              value={this.state.image}
              onChange={this.handleFileSelected}
              placeholder="Image"
            />
            <button onClick={this.handleFileUpload}>Upload</button>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <select
              name="category"
              className="form-control"
              value={this.state.category}
              onChange={this.handleInputChange}
            >
              <option>Animals</option>
              <option>Gaming</option>
              <option>General</option>
              <option>Sports</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;

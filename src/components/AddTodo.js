import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: " " });
  };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{ display: "flex", padding: "10px" }}
      >
        <input
          type="text"
          name="title"
          placeholder="Add To-Do..."
          value={this.state.title}
          onChange={this.onChange}
          style={{
            flex: "10",
            padding: "2px",
            borderRadius: "50px",
            textIndent: "10px",
          }}
        />
        <input
          type="submit"
          className="btn"
          style={{
            flex: "1",
            padding: "1px",
            borderRadius: "5px",
            textAlign: "center",
          }}
        />
      </form>
    );
  }
}

export default AddTodo;

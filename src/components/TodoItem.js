import React, { Component } from "react";

class TodoItem extends Component {
  styles = () => {
    return {
      background: "#33322a1f",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div className="todo-container">
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(this, id)}
        />{" "}
        {title}
        <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
          Delete
        </button>
        <p style={this.styles()}>{title}</p>
        <ul>
          <li>{id}</li>
        </ul>
      </div>
    );
  }
}

const btnStyle = {
  background: "#f2233599",
  color: "#fff",
  margin: 10,
  padding: 5,
  borderRadius: 50,
};
export default TodoItem;

import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    const { markComplete, delTodo } = this.props;
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={markComplete}
        delTodo={delTodo}
      />
    ));
  }
}

export default Todos;

//   showTodos = () =>
//     this.props.todos.map((todo) => (
//       <TodoItem
//         key={todo.id}
//         todo={todo}
//         markComplete={this.props.markComplete}
//         delTodo={this.props.delTodo}
//       />
//     ));
//   render() {
//     this.showTodos;
//   }
// }

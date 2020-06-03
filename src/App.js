import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take out trash",
        completed: false,
      },
      {
        id: uuid.v4(),
        title: "Walk Rosie",
        completed: true,
      },
      {
        id: uuid.v4(),
        title: "Morning run",
        completed: true,
      },
      {
        id: uuid.v4(),
        title: "Watch React tutorials",
        completed: true,
      },
      {
        id: uuid.v4(),
        title: "Clean dishes",
        completed: false,
      },
    ],
  };

  //toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  //deletes todo's
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };
  //add todo's
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="container">
            <Header />
            <AddTodo addTodo={this.addTodo} />

            <Todos
              todos={this.state.todos}
              markComplete={this.markComplete}
              delTodo={this.delTodo}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

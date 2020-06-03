import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out trash",
        completed: false,
      },
      {
        id: 2,
        title: "Walk Rosie",
        completed: true,
      },
      {
        id: 3,
        title: "Morning run",
        completed: true,
      },
      {
        id: 4,
        title: "Watch React tutorials",
        completed: true,
      },
      {
        id: 5,
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

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: 6,
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

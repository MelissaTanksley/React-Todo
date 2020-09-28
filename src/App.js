import React, { Component } from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
t';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    }
  }
  render() {
    return (
      <div>
        <h2>I'm so stressed!</h2>
        <TodoList />
        <TodoForm />
      </div>
    );
  }

export default App;

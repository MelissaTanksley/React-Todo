import React, { Component } from 'react'
//import TodoList from './TodoList'
//import TodoForm from './TodoForm'
import './components/Todo.js'


//export class App extends Component {

 class App extends Component {
    constructor(props) {
      super();
      this.state = {
        todo: this.todoData || [],
        complete: false,
      input: "",
      style: { textDecoration: 'none' }
      //className: "todoCard"

    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState(prev => {
      return {
        todo: [
          ...prev.todo,
          {
            input: this.state.input,
            complete: false,
            id: Date.now(),
            className: "todoCard"
          }
        ],
        input: ""
      }
    });
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  /*handleClear = () => {
    this.setState(prev => {
      return (
        todo: prev.todo.filter(filter => {
          return filter.complete === false;
    })}
  } */


  handleComplete = e => {
    this.setState({
      todo: this.state.todo.map(list => {
          return (Number(list.id) === Number(e.target.id)
              ? {input: list.input, complete: !list.complete, id: list.id, className: list.className}
              : list);
        })
    })
  };

 componentDidMount() {
    this.todoData = JSON.parse(localStorage.getItem("todo"));
    if (localStorage.getItem("todo")) {
    this.setState({
      todo: [...this.todoData.todo]
      });
    } else {
      console.log("nothing");
    }

  /*render () 
    const { input } = this.state;
    return (
      <div className="container">
        <TodoForm
          input={input}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleClear={this.handleClear}
        />
        <TodoList 
          style={this.handleStyle}
          todo={this.state.todo}
          handleComplete={this.handleComplete}
        />
      </div>
    );*/
  
}

}

export default App;
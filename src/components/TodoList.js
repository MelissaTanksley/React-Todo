import React from 'react'
import Todo from 'todo'
import Index from 'index'

   class TodoList extends React.Component {
    render() {
      const { todo, complete, handleComplete } = this.props;
      return (
      <div className="todoListContainer">
        {todo.map(task => (
          <>
            {console.log(task.className)}
            <Todo
              className={task.complete ? "todoCard completed" : "todoCard"}
              id={task.id}
              todo={task}
              complete={complete}
              handleComplete={handleComplete}
            />
          </>
        ))}
      </div>
    );
  }
}
  

export default TodoList;
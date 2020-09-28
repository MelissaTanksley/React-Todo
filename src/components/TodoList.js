import React from 'react';
import Todo from './Todo'

const Todo = (props) => {
    console.log('todo', todo);
    return (
      <div className="todo">
        {todo.map(list => { return <p>{list}</p> })}
        {todo.map(list => {
          return (
            <div onClick={e => props.handleComplete(e)}>
              <p >{list}</p>
            </div>
          )
        })}
      </div>
    )
}
export default TodoList;
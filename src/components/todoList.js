import React from 'react'
import ToDo from './todo'

const ToDoList = ({ todos }) => {
  return (
    <div>
      {
        todos.map(todo => (
          <ToDo todo={todo} key={todo.id} />
        ))
      }
    </div>
  )
}

export default ToDoList

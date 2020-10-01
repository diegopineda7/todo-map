import React from 'react'
import { useSelector } from 'react-redux'
import ToDo from './todo'

const ToDoList = () => {
  const todos = useSelector(state => state.todos)

  return (
    <div>
      {
        todos.length
          ? todos.map(todo => (
            <ToDo
              todo={todo}
              key={todo.id}
            />
          ))
          : <h2>You have no ToDo's.</h2>
      }
    </div>
  )
}

export default ToDoList

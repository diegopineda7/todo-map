const initialState = {
  todos: []
}

const addToDo = (todos, newTodo) => {
  return [...todos, newTodo]
}

const deleteToDo = (todos, id) => {
  return todos.filter(todo => todo.id !== id)
}

const editToDo = (todos, id, newName) => {
  let todo = todos.filter(todo => todo.id === id)[0]
  let todoList = todos.filter(todo => todo.id !== id)
  todo.name = newName

  return [...todoList, todo]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        todos: addToDo(state.todos, action.payload)
      }
    case 'DELETE':
      return {
        ...state,
        todos: deleteToDo(state.todos, action.payload)
      }
    case 'EDIT':
      return {
        ...state,
        todos: editToDo(state.todos, action.payload)
      }
    default:
      return state
  }
}
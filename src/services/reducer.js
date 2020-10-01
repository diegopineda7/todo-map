const initialState = {
  location: { lat: 6.55, lng: -73.13 },
  todos: [{
    id: 1,
    name: 'Gym',
    history: [
      { text: 'Created', lat: 6.55, lng: -73.13 }
    ]
  }]
}

const setLocation = ({ lat, lng }) => {
  return { lat, lng }
}

const addToDo = (todos, newTodo) => {
  return [...todos, newTodo]
}

const deleteToDo = (todos, id) => {
  return todos.filter(todo => todo.id !== id)
}

const editToDo = (todos, { id, newName }) => {
  let todo = todos.filter(todo => todo.id === id)[0]
  let todoList = todos.filter(todo => todo.id !== id)
  todo.name = newName

  return [...todoList, todo]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOCATION':
      return {
        ...state,
        location: setLocation(action.data)
      }
    case 'ADD':
      return {
        ...state,
        todos: addToDo(state.todos, action.data)
      }
    case 'DELETE':
      return {
        ...state,
        todos: deleteToDo(state.todos, action.data)
      }
    case 'EDIT':
      return {
        ...state,
        todos: editToDo(state.todos, action.data)
      }
    default:
      return state
  }
}

export default reducer
const initialState = {
  location: { lat: undefined, lng: undefined },
  todos: []
}

const setLocation = ({ lat, lng }) => {
  return { lat, lng }
}

const addToDo = (todos, { id, name, update }) => {
  const newTodo = {
    id,
    name,
    history: [
      { ...update }
    ]
  }
  return [...todos, newTodo]
}

const doneToDo = (todos, { id, update }) => {
  let todo = todos.filter(todo => todo.id === id)[0]
  let todoList = todos.filter(todo => todo.id !== id)
  todo.done = true
  todo.history.push({ ...update })

  return [...todoList, todo]
}

const editToDo = (todos, { id, newName, update }) => {
  let todo = todos.filter(todo => todo.id === id)[0]
  let todoList = todos.filter(todo => todo.id !== id)
  todo.name = newName
  todo.history.push({ ...update })

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
    case 'DONE':
      return {
        ...state,
        todos: doneToDo(state.todos, action.data)
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
import React, { createRef, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const AddForm = () => {
  const [newTodo, setNewTodo] = useState()
  const inputRef = createRef()

  const dispatch = useDispatch()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleChange = e => {
    setNewTodo(e.target.value)
  }

  const saveTodo = e => {
    e.preventDefault()
    dispatch({
      type: 'ADD',
      data: {
        id: Math.ceil(Math.random() * 1000),
        name: newTodo,
        // history: [
        //   { text: 'Created', lat, lng }
        // ]
      }
    })
    setNewTodo('')
    inputRef.current.focus()
  }

  return (
    <form onSubmit={saveTodo}>
      <input
        type='text'
        value={newTodo}
        ref={inputRef}
        onChange={handleChange}
        style={{
          padding: '5px 10px',
          marginBottom: 25,
          marginRight: 15
        }}
        required
      />
      <button
        type='submit'
        style={{
          padding: '5px 25px',
          borderRadius: 15,
          background: 'darkblue',
          color: '#fff',
          cursor: 'pointer'
        }}
      >Add it!</button>
    </form>
  )
}

export default AddForm

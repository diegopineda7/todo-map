import React, { createRef, useState } from 'react'
import { useDispatch } from 'react-redux'

const ToDo = ({ todo }) => {
  const { id, name } = todo
  const [editing, setEditing] = useState(false)
  const [newName, setNewName] = useState(name)

  const inputRef = createRef()

  const dispatch = useDispatch()

  const done = () => {
    dispatch({
      type: 'DELETE',
      data: todo.id
    })
  }

  const handleChange = e => {
    setNewName(e.target.value)
  }

  const showEditInput = () => {
    setEditing(true)
  }

  const hideEditInput = () => {
    setEditing(false)
    setNewName(name)
  }

  const editTodo = e => {
    e.preventDefault()
    dispatch({
      type: 'EDIT',
      data: {
        id,
        newName
      }
    })
    hideEditInput()
    setNewName(newName)
  }

  return (
    <div style={{
      backgroundColor: 'darkblue',
      marginBottom: 5,
      color: 'white',
      padding: 15,
      borderRadius: 15,
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <div>
        {
          editing
            ? <form
              hidden={!editing}
              onSubmit={editTodo}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 15
              }}
            >
              <input
                type='text'
                value={newName}
                ref={inputRef}
                onChange={handleChange}
                style={{
                  padding: '5px 10px',
                }}
                required
              />
              <div style={{
                display: 'flex',
                gap: 15
              }}>
                <button type='submit'>Save</button>
                <button onClick={hideEditInput}>Cancel</button>
              </div>
            </form>
            : name
        }
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 15
      }}>
        <button onClick={showEditInput}>Edit</button>
        <button onClick={done}>Done</button>
      </div>
    </div >
  )
}

export default ToDo

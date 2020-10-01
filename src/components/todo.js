import React, { createRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ToDo = ({ todo, history }) => {
  const { id, name } = todo
  const [editing, setEditing] = useState(false)
  const [newName, setNewName] = useState(name)
  const myPosition = useSelector(state => state.location)

  const inputRef = createRef()

  const dispatch = useDispatch()

  const editTodo = e => {
    e.preventDefault()
    dispatch({
      type: 'EDIT',
      data: {
        id,
        newName,
        update: {
          text: 'Edited',
          lat: myPosition.lat,
          lng: myPosition.lng
        }
      }
    })
    hideEditInput()
    setNewName(newName)
  }

  const done = () => {
    dispatch({
      type: 'DONE',
      data: {
        id: todo.id,
        update: {
          text: 'Task done (deleted)',
          lat: myPosition.lat,
          lng: myPosition.lng
        }
      }
    })
  }

  const showEditInput = () => {
    setEditing(true)
  }

  const hideEditInput = () => {
    setEditing(false)
    setNewName(name)
  }

  const handleChange = e => {
    setNewName(e.target.value)
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
            : `${name} - ${history} updates`
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

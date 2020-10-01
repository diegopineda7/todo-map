import React from 'react'

const ToDo = ({ todo }) => {
  const { id, name } = todo

  const done = (todo) => {
    alert(`Todo ${todo.name} done!`)
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
      <main>
        {id}. {name}
      </main>
      <div style={{
        display: 'flex',
        gap: 25
      }}>
        <div>
          <input type='checkbox' onChange={() => done(todo)} />
        </div>
        <div>
          <button>X</button>
        </div>
      </div>
    </div>
  )
}

export default ToDo

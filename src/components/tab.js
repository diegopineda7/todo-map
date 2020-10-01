import { Link } from 'gatsby'
import React from 'react'

const Tab = ({ name, to }) => {
  return (
    <Link to={to} style={{
      textDecoration: 'none'
    }}>
      <button style={{
        padding: 15,
        width: '100%',
        cursor: 'pointer'
      }}>
        {name}
      </button>
    </Link>
  )
}

export default Tab
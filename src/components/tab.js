import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React from 'react';


const Tab = ({ name, to, icon }) => {
  return (
    <Link to={to} style={{
      textDecoration: 'none'
    }}>
      <button style={{
        padding: 5,
        width: '100%',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        backgroundColor: 'transparent',
        color: '#fff'
      }}>
        <FontAwesomeIcon icon={icon} color='#fff' />
        {name}
      </button>
    </Link>
  )
}

export default Tab
import React from 'react'
import Tab from './tab'

const BottomTabs = () => {
  return (
    <div className='menu' style={{
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'red',
      textAlign: 'center',
      display: 'grid',
      gridAutoFlow: 'column'
    }}>
      <Tab name='TodoApp' to='/' />
      <Tab name='Map' to='/page-2' />
    </div>
  )
}

export default BottomTabs

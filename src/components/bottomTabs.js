import { faMapMarked, faTasks } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Tab from './tab';

const BottomTabs = () => {
  return (
    <div className='menu' style={{
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      textAlign: 'center',
      display: 'grid',
      gridAutoFlow: 'column',
      backgroundColor: 'darkblue'
    }}>
      <Tab name="ToDo's" to='/' icon={faTasks} />
      <Tab name='Map' to='/map' icon={faMapMarked} />
    </div>
  )
}

export default BottomTabs

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Marker = ({ user, text, lat, lng }) => {
  const showInfo = () => {
    alert(`${text}: ${lat}, ${lng}`)
  }

  return (
    <div onClick={showInfo}>
      <FontAwesomeIcon
        icon={faMapMarkerAlt}
        style={{
          color: user ? 'blue' : 'red',
          fontSize: user ? 45 : 30
        }} />
    </div>
  )
}

export default Marker

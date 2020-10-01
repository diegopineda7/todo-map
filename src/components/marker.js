import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Marker = ({ user, todoName, text, lat, lng }) => {
  const showInfo = () => {
    alert(`Todo "${todoName}" was ${text}\n Latitude: ${lat}, Longitude: ${lng}`)
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

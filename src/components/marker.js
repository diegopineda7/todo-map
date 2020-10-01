import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Marker = ({ todoName, text, lat, lng, setMarkerInfo }) => {
  const showInfo = () => {
    setMarkerInfo(`Todo "${todoName}" was ${text}. Latitude: ${lat}, Longitude: ${lng}`)
  }

  return (
    <div onClick={showInfo}>
      <FontAwesomeIcon
        icon={faMapMarkerAlt}
        style={{
          color: 'red',
          fontSize: 30
        }} />
    </div>
  )
}

export default Marker

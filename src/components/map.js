import GoogleMapReact from 'google-map-react';
import React from 'react';
import { useSelector } from 'react-redux';
import Marker from './marker';

const Map = ({ myPosition }) => {
  const todos = useSelector(state => state.todos)

  return (
    <GoogleMapReact
      defaultCenter={myPosition}
      defaultZoom={8}
    >
      {/* <Marker
        user
        lat={myPosition.lat}
        lng={myPosition.lng}
      /> */}
      {
        todos.map(todo => (
          todo.history.map(({ text, lat, lng }) => (
            <Marker
              text={text}
              lat={lat}
              lng={lng}
            />
          ))
        ))
      }
    </GoogleMapReact>
  )
}

export default Map
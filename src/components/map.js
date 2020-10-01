import GoogleMapReact from 'google-map-react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Marker from './marker';
import MarKerInfo from './markerInfo';

const Map = ({ myPosition }) => {
  const [markerInfo, setMarkerInfo] = useState('')
  const todos = useSelector(state => state.todos)

  return (
    <>
      {
        todos.length
          ? <>
            <GoogleMapReact
              defaultCenter={myPosition}
              defaultZoom={8}
            >
              {
                todos.map(todo => (
                  todo.history.map(({ text, lat, lng }, index) => (
                    <Marker
                      key={index}
                      todoName={todo.name}
                      text={text}
                      lat={lat}
                      lng={lng}
                      setMarkerInfo={setMarkerInfo}
                    />
                  ))
                ))
              }
            </GoogleMapReact>
            <MarKerInfo markerInfo={markerInfo} />
          </>
          : <>
            <h3>No ToDo's</h3>
            <h4>Add a ToDo to see it's location</h4>
          </>
      }
    </>
  )
}

export default Map
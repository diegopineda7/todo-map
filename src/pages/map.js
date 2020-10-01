
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Map from "../components/map";
import SEO from "../components/seo";

const MapPage = () => {
  const [myPosition, setMyPosition] = useState({
    lat: undefined,
    lng: undefined
  })

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(res => {
          setMyPosition({
            lat: parseFloat(res.coords.latitude.toFixed(2)),
            lng: parseFloat(res.coords.longitude.toFixed(2)),
          })
        })
      }
    }
    getLocation()
  }, [])

  return (
    <Layout titleAdd='Map'>
      <SEO title="Map" />
      {/* { */}
      {/* myPosition.lat !== undefined ? */}
      <div style={{ height: '70vh', width: '100%' }}>
        <Map myPosition={myPosition} />
      </div>
      {/* : 'No location' */}
      {/* } */}
    </Layout>
  )
}
export default MapPage


import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Map from '../components/map';
import SEO from "../components/seo";

const MapPage = () => {
  const [myPosition, setMyPosition] = useState({
    lat: '',
    lng: ''
  })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(res => {
        setMyPosition({
          lat: parseFloat(res.coords.latitude.toFixed(2)),
          lng: parseFloat(res.coords.longitude.toFixed(2)),
        })
      })
    }
  }, [])

  return (
    <Layout titleAdd='Map'>
      <SEO title="Map" />
      <div style={{ height: '70vh', width: '100%' }}>
        {
          myPosition.lat !== '' &&
          <Map myPosition={myPosition} />
        }
      </div>
    </Layout>
  )
}
export default MapPage

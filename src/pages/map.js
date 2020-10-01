
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Map from "../components/map";
import MarKerInfo from "../components/markerInfo";
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
            lat: parseFloat(res.coords.latitude),
            lng: parseFloat(res.coords.longitude),
          })
        })
      }
    }
    getLocation()
  }, [])

  return (
    <Layout titleAdd='Map'>
      <SEO title="Map" />
      <div style={{
        height: '60vh',
        width: '100%',
        borderBottom: '1px dashed black'
      }}>
        <Map myPosition={myPosition} />
      </div>
      <MarKerInfo />
    </Layout>
  )
}
export default MapPage

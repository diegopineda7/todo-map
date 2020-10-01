
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/layout";
import Map from '../components/map';
import SEO from "../components/seo";

const MapPage = () => {
  const [myPosition, setMyPosition] = useState({
    lat: undefined,
    lng: undefined
  })

  const DispatchComponent = ({ setMyPosition }) => {
    const myPosition = useSelector(state => state.location)
    setMyPosition(myPosition)

    return <></>
  }

  return (
    <Layout titleAdd='Map'>
      <SEO title="Map" />
      <DispatchComponent setMyPosition={setMyPosition} />
      <div style={{ height: '70vh', width: '100%' }}>
        {
          myPosition.lat !== undefined &&
          <Map myPosition={myPosition} />
        }
      </div>
    </Layout>
  )
}
export default MapPage


import React from "react";
import Layout from "../components/layout";
import Map from '../components/map';
import SEO from "../components/seo";

const MapPage = () => {
  const myPosition = useSelector(state => state.location)

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

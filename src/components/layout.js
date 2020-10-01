/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Provider, useDispatch } from "react-redux"
import { createStore } from "redux"
import { persistReducer, persistStore } from 'redux-persist'
import { PersistGate } from "redux-persist/integration/react"
import storage from 'redux-persist/lib/storage'
import reducer from '../services/reducer'
import BottomTabs from "./bottomTabs"
import Header from "./header"
import "./layout.css"


const DispatchComponent = ({ location }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const setLocation = ({ lat, lng }) => {
      dispatch({
        type: 'LOCATION',
        data: {
          lat, lng
        }
      })
    }
    setLocation(location)
  }, [])

  return <></>
}

const Layout = ({ children, titleAdd, titleFull }) => {
  titleAdd = titleAdd ? titleAdd + ' - ' : ''
  const [myLocation, setMyLocation] = useState({
    lat: undefined,
    lng: undefined
  })

  const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, reducer)
  const store = createStore(persistedReducer)
  const persistor = persistStore(store)

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(res => {
          setMyLocation({
            lat: parseFloat(res.coords.latitude.toFixed(3)),
            lng: parseFloat(res.coords.longitude.toFixed(3)),
          })
        })
      }
    }
    getLocation()
  }, [])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {
          myLocation.lat !== undefined &&
          <DispatchComponent location={myLocation} />
        }
        <Header siteTitle={titleFull || `${titleAdd} ${data.site.siteMetadata?.title}` || `Title`} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
        </div>
        <BottomTabs />
      </PersistGate>
    </Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducer from '../services/reducer'
import BottomTabs from "./bottomTabs"
import Header from "./header"
import "./layout.css"


const store = createStore(reducer)

const Layout = ({ children, titleAdd, titleFull }) => {
  titleAdd = titleAdd ? titleAdd + ' - ' : ''

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
    </Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

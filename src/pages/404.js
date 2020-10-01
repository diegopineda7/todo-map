import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


const NotFoundPage = () => (
  <Layout titleFull="Page Not found">
    <SEO title="404: Not found" />
    <p>This doesn&#39;t exist.</p>
    <p>Move to one actual page with the tabs below.</p>
  </Layout>
)

export default NotFoundPage

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ServerErrorPage = () => (
  <Layout>
    <SEO title="500: Internal Server Error" />
    <h1>Oops, looks like the server is down!</h1>
    <p>Our bad. Have a cuppa and come back to us later please.</p>
  </Layout>
)

export default ServerErrorPage

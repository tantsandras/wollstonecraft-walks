import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Steps from "../components/steps"
import Circles from "../components/circles"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Circles />
    <Steps />
  </Layout>
)

export default IndexPage

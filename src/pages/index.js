import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Steps from "../components/steps"

const circle1 = {
  position: `absolute`,
  width: `224px`,
  height: `224px`,
  left: `30%`,
  top: `40%`,
  borderRadius: `50%`,
  background: `rgba(236, 119, 119, 0.25)`,
  zIndex: `-1`,
}

const circle2 = {
    position: `absolute`,
    width: `131px`,
    height: `131px`,
    left: `40%`,
    top: `80%`,
    borderRadius: `50%`,
    background: `rgba(101, 89, 237, 0.22)`,
    zIndex: `-1`,
}

const circle3 = {
    position: `absolute`,
    width: `112px`,
    height: `112px`,
    left: `30%`,
    bottom: `2%`,
    borderRadius: `50%`,
    background: `#FFD0D0`,
    zIndex: `-1`,
}

const circle4 = {
    position: `absolute`,
    width: `200px`,
    height: `200px`,
    left: `8px`,
    bottom: `-10%`,
    borderRadius: `50%`,
    zIndex: `-1`,
    background: `rgba(0, 71, 255, 0.58)`,
}
  
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={circle1}></div>
    <div style={circle2}></div>
    <Steps />

    <Link to="/page-2/">Go to page 2</Link>
    <div style={circle3}></div>
    <div style={circle4}></div>
  </Layout>
)

export default IndexPage

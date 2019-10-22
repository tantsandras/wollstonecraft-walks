import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Circles from "../components/circles"
import Steps from "../components/steps"
import "typeface-archivo-black"
import 'typeface-yeseva-one'


const IndexPage = () => {


return (

  <Layout>
    <SEO title="Home" />
    <Circles />
    <Steps />
  </Layout>
  )
}

export default IndexPage

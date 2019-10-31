import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Circles from "../components/circles"
import Steps from "../components/steps"
import "typeface-archivo-black"
import 'typeface-bungee-shade'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Archivo Black', Impact, sans-serif;
  }
`


const IndexPage = () => {


return (

  <Layout>
    <GlobalStyle />
    <SEO title="Home" />
    <Circles />
    <Steps />
  </Layout>
  )
}

export default IndexPage

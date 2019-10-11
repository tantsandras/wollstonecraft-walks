import React from "react"
import SEO from "../components/seo"
import Menu from "../components/menu"
import styled, { keyframes } from "styled-components"
import Podcast from "../components/podcastStructure"
import Circles from "../components/circles"

const PodcastPage = () => {
    
    return (
    <section style={{fontFamily: `Open Sans`}}>
      <SEO title="Podcast" />
      <Menu />
      <Circles />
      <Podcast />
      </section>
  )
}
  export default PodcastPage

import React from "react"
import SEO from "../components/seo"
import Menu from "../components/menu"
import styled, { keyframes } from "styled-components"
import Podcast from "../components/podcastStructure"

const PodcastPage = () => {
    
    return (
    <section style={{fontFamily: `Helvetica`}}>
      <SEO title="Podcast" />
      <Menu />
      <Podcast />
      </section>
  )
}
  export default PodcastPage

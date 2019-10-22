import React from "react"
import SEO from "../components/seo"
import Menu from "../components/menu"
import Podcast from "../components/podcastStructure"
import Circles from "../components/circles"
import "typeface-archivo-black"

const PodcastPage = () => {
    
    return (
    <section style={{fontFamily: `Helvetica, Roboto, 'Open Sans'`}}>
      <SEO title="Podcast" />
      <Menu />
      <Circles />
      <Podcast />
      </section>
  )
}
  export default PodcastPage

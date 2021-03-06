import React from "react"
import SEO from "../components/seo"
import Menu from "../components/menu"
import Media from "../components/media"
import Circles from "../components/circles"
import "typeface-archivo-black"


const MediaPage = () => {

    return (
    <section style={{fontFamily: `Helvetica, Roboto, 'Open Sans'`}}>
      <SEO title="Media" />
      <Menu />
      <Circles />
      <Media />
      </section>
  )
}

  export default MediaPage
import React from "react"
import SEO from "../components/seo"
import Menu from "../components/menu"
import Gallery from "../components/gallery"
import Circles from "../components/circles"

const GalleryPage = () => {
  return (
      <main style={{ fontFamily: `Open Sans` }}>
        <SEO title="Gallery" />
        <Menu />
        <Circles />
        <Gallery />
      </main>
  )
}
export default GalleryPage

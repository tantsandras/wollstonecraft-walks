import React from "react"
import SEO from "../components/seo"
import Menu from "../components/menu"
import styled, { keyframes } from "styled-components"
import FmPrefAndFilm from "../components/fmPrefAndFilm"
import ArtBook from "../components/artBook"
import Circles from "../components/circles"

const FmPage = () => {
    
    return (
    <main style={{fontFamily: `Open Sans`}}>
      <SEO title="Fragments & Monuments Preformance and Film Archive" />
      <Menu />
      <FmPrefAndFilm />
      <ArtBook />
      </main>
  )
}
  
  export default FmPage
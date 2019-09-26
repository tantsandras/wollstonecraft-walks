import React from "react"
import SEO from "../components/seo"
import Menu from "../components/menu"
import styled, { keyframes } from "styled-components"
import FmPrefAndFilm from "../components/fmPrefAndFilm"

const FmPage = () => {
    
    return (
    <section style={{fontFamily: `Helvetica`}}>
      <SEO title="Fragments & Monuments Preformance and Film Archive" />
      <Menu />
      <FmPrefAndFilm />
      </section>
  )
}
  
  export default FmPage
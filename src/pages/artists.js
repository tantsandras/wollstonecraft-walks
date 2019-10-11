import React from "react"
import SEO from "../components/seo"
import Menu from "../components/menu"
import styled, { keyframes } from "styled-components"
import Artists from "../components/artists"


const ArtistsPage = () => {
    return (
    <section style={{fontFamily: `Open Sans`}}>
      <SEO title="Artists" />
      <Menu />
      <h1
          style={{
            fontFamily: `'Archivo Black', Impact`,
            fontSize: `2.2rem`,
            textAlign: `center`,
            marginTop: `8rem`,
            letterSpacing: `1px`,
            marginBottom: `2rem`,
          }}
        >Our wonderful creative team</h1>
      <Artists />
      </section>
  )
}
  
  export default ArtistsPage
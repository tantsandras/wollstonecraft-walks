import React from "react"
import SEO from "../components/seo"
import Menu from "../components/menu"
import FmPrefAndFilm from "../components/fmPrefAndFilm"
import Circles from "../components/circles"
import "typeface-archivo-black"

const FmPage = () => {
  return (
    <>
      <SEO title="Fragments & Monuments Preformance and Film Archive" />
      <Menu />
      <Circles />
      <FmPrefAndFilm />
    </>
  )
}

export default FmPage

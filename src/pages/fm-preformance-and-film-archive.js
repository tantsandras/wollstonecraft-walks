import React from "react"
import SEO from "../components/seo"
import Menu from "../components/menu"
import styled, { keyframes } from "styled-components"
import FmPrefAndFilm from "../components/fmPrefAndFilm"
import ArtBook from "../components/artBook"

const MenuContrast = styled.div`
  height: 30px;
  width: 30px;
  position: absolute;
  z-index: 1;
  right: 20px;
  top: 32px;
  cursor: pointer;
  & > * {
    height: 2px;
    width: 30px;
    display: block;
    margin-bottom: 4px;
    background-color: white;
  }
`

const FmPage = () => {
  return (
    <>
      <MenuContrast>
        <span></span>
        <span></span>
        <span></span>
      </MenuContrast>
      <Menu />
      <FmPrefAndFilm />

      <SEO title="Fragments & Monuments Preformance and Film Archive" />
      <Menu />

      <ArtBook />
    </>
  )
}

export default FmPage

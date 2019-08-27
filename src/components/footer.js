import React from "react"
import styled from "styled-components"
import FmLogo from "../components/fmLogo"
import ScaryLogo from "../components/scaryLogo"
import StokeLogo from "../components/stokeLogo"
import HeritageLogo from "../components/heritageLogo"


const element = {
    gridTemplateColumns: `repeat(6, 1fr)`,
    gridTemplateRows: `repeat(1, 400px)`,
    fontFamily: `Helvetica`,
    textAlign: `center`,
}

  const bubble = {
    width: `200px`,
    heigth: `200px`,
    borderRadius: `50%`,
    padding: `30px`,
    background: `white`,
    margin: `auto`,
  }

  const pinkBubble = {
    width: `200px`,
    heigth: `200px`,
    borderRadius: `50%`,
    padding: `30px`,
    background: `#e6007e`,
  }


const FooterGrid = styled.footer`  
    width: 100%;
    padding: 4rem 6rem;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 6%;
    margin-top: 4rem;
    justify-content: center;
`

const Footer = () => (
<FooterGrid>
    <h4 style={element}>
A collaboration between:</h4>
<div style={bubble}> <ScaryLogo style={element} /> </div>
   <div style={pinkBubble}> <StokeLogo style={element} /> </div> 
<div style={bubble}><HeritageLogo style={element} /> </div>
<div style={bubble}><FmLogo style={element} /> </div>
<h4 style={element}>Get in touch</h4>
</FooterGrid>
)

export default Footer
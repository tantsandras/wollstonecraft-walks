import React from "react"
import styled from "styled-components"
import FmLogo from "../components/fmLogo"
import ScaryLogo from "../components/scaryLogo"
import StokeLogo from "../components/stokeLogo"
import HeritageLogo from "../components/heritageLogo"

const element = {
  gridTemplateColumns: `repeat(5, 1fr)`,
  gridTemplateRows: `repeat(5, 300px)`,
  fontFamily: `Helvetica`,
  textAlign: `center`,
}

const Bubble = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 50%;
  width: 230px;
  height: 230px;
  background: white;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
`

const fmBubble = {
  position: `relative`,
  display: "flex",
  alignItems: "center",
  borderRadius: `50%`,
  width: `230px`,
  height: `230px`,
  background: `white`,
  textAlign: `center`,
  verticalAlign: `middle`,
  padding: `25px`,
  overflow: `hidden`,
}

const pinkBubble = {
  position: `relative`,
  borderRadius: `50%`,
  display: "flex",
  alignItems: "center",
  margin: `auto`,
  width: `230px`,
  height: `230px`,
  textAlign: `center`,
  padding: `5px`,
  verticalAlign: `middle`,
  background: `#e6007e`,
  overflow: `hidden`,
}

const FooterGrid = styled.section`
  width: 100%;
  padding: 6rem 4rem;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 4%;
  margin-top: 4rem;
  justify-content: center;
  margin-bottom: 4rem;
`

const FooterPolyglon = styled.div`
  -webkit-clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
  position: relative;
  padding-bottom: 10em;
  overflow: hidden;
  background-color: #191919;
  &:after {
    -webkit-clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
    clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
    background: #191919;
    content: "";
    position: absolute;
    left: 0;
    top: -182%;
    right: 0;
    height: auto;
    display: block;
    z-index: 9;
  }
`

const Footer = () => (
  <FooterPolyglon>
    <FooterGrid>
      <div style={element}>
        <h4
          style={{
            fontFamily: `Helvetica`,
            fontSize: `1rem`,
            color: `white`,
            textTransform: `uppercase`,
            fontWeight: `lighter`,
            letterSpacing: `2px`,
            lineHeight: `2`,
            marginTop: `3rem`,
          }}
        >
          A collaboration between
        </h4>
      </div>
      <div style={element}>
        <Bubble>
          {" "}
          <ScaryLogo />{" "}
        </Bubble>
      </div>

      <div style={element}>
        <div style={pinkBubble}>
          {" "}
          <StokeLogo />{" "}
        </div>
      </div>
      <div style={element}>
        <Bubble>
          <HeritageLogo />{" "}
        </Bubble>
      </div>
      <div style={element}>
        <div style={fmBubble}>
          <FmLogo />{" "}
        </div>
      </div>
    </FooterGrid>
  </FooterPolyglon>
)

export default Footer

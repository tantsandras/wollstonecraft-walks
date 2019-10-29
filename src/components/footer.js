import React from "react"
import styled from "styled-components"
import FmLogo from "../components/fmLogo"
import ScaryLogo from "../components/scaryLogo"
import StokeLogo from "../components/stokeLogo"
import HeritageLogo from "../components/heritageLogo"

const element = {
  gridTemplateColumns: `repeat(5, 1fr)`,
  gridTemplateRows: `repeat(5, 300px)`,
  fontFamily: `Helvetica, Roboto, 'Open Sans'`,
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
  margin: auto;
`

const FmBubble = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: auto;
  border-radius: 50%;
  width: 230px;
  height: 230px;
  background: white;
  text-align: center;
  vertical-align: middle;
  padding: 25px;
  overflow: hidden;
`

const PinkBubble = styled.div`
  position: relative;
  border-radius: 50%;
  display: flex;
  align-items: center;
  margin: auto;
  width: 230px;
  height: 230px;
  text-align: center;
  padding: 5px;
  background: #e6007e;
  vertical-align: middle;
  overflow: hidden;
`

const FooterGrid = styled.section`
  width: 100%;
  padding: 6rem 4rem;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
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
  background-image: radial-gradient(
      circle at 100% 150%,
      #191919 26%,
      #202020 22%,
      #202020 28%,
      #191919 28%,
      #191919 38%,
      #202020 34%,
      #202020 38%,
      transparent 42%,
      transparent
    ),
    radial-gradient(
      circle at 0 150%,
      #191919 26%,
      #202020 22%,
      #202020 26%,
      #191919 30%,
      #191919 38%,
      #202020 34%,
      #202020 38%,
      transparent 40%,
      transparent
    ),
    radial-gradient(
      circle at 50% 100%,
      #202020 8%,
      #191919 12%,
      #191919 25%,
      #202020 21%,
      #202020 28%,
      #191919 32%,
      #191919 45%,
      #202020 41%,
      #202020 48%,
      #191919 52%,
      #191919 65%,
      #202020 61%,
      #202020 69%,
      transparent 73%,
      transparent
    ),
    radial-gradient(
      circle at 100% 50%,
      #202020 3%,
      #191919 7%,
      #191919 17%,
      #202020 13%,
      #202020 18%,
      #191919 22%,
      #191919 31%,
      #202020 27%,
      #202020 32%,
      #191919 36%,
      #191919 46%,
      #202020 42%,
      #202020 47%,
      transparent 51%,
      transparent
    ),
    radial-gradient(
      circle at 0 50%,
      #202020 3%,
      #191919 7%,
      #191919 17%,
      #202020 13%,
      #202020 18%,
      #191919 22%,
      #191919 31%,
      #202020 27%,
      #202020 32%,
      #191919 36%,
      #191919 46%,
      #202020 42%,
      #202020 47%,
      transparent 51%,
      transparent
    );
  background-size: 100px 50px;
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
            fontFamily: `Helvetica, Roboto, 'Open Sans'`,
            fontSize: `1rem`,
            color: `white`,
            textTransform: `uppercase`,
            letterSpacing: `2px`,
            lineHeight: `2`,
            marginTop: `3rem`,
            fontWeight: `normal`,
          }}
        >
          A collaboration between
        </h4>
      </div>
      <div style={element}>
        <a
          href="http://wollstonecraftlive.com/fm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FmBubble>
            <FmLogo />{" "}
          </FmBubble>
        </a>
      </div>
      <div style={element}>
        <a
          href="https://scarylittlegirls.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Bubble>
            {" "}
            <ScaryLogo />{" "}
          </Bubble>
        </a>
      </div>

      <div style={element}>
        <PinkBubble>
          <a
            href="http://www.stokenewingtonliteraryfestival.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <StokeLogo />{" "}
          </a>
        </PinkBubble>
      </div>
      <div style={element}>
        <a
          href="https://www.heritagefund.org.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Bubble>
            <HeritageLogo />{" "}
          </Bubble>
        </a>
      </div>
    </FooterGrid>
  </FooterPolyglon>
)

export default Footer

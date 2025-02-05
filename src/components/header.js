import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import styled, { keyframes } from "styled-components"
import "typeface-archivo-black"
import Mary from "../images/Wollstonecraft_portrait_logo-02 copy.png"

const turnVisible = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

const element = {
  gridTemplateColumns: `repeat(4, 1fr)`,
  gridTemplateRows: `repeat(2, 300px)`,
  fontFamily: `Helvetica, Roboto, 'Open Sans'`,
}

const Welcome = styled.h1`
  letter-spacing: 1px;
  font-family: "Archivo Black", "Impact", sans-serif;
  font-display: block;
  font-size: 1.6rem;
  color: #333333;
  animation: ${turnVisible} 0.8s ease-in-out;
`

const MainHeading = styled.h1`
  color: #333333;
  text-decoration: none;
  text-align: center;
  font-family: "Archivo Black", "Impact", sans-serif;
  font-display: block;
  font-weight: bolder;
  z-index: 1;
  line-height: 1.5;
  font-size: 1.8rem;
  margin-top: 4rem;
  margin-bottom: -1rem;
  letter-spacing: 1px;
  animation: ${turnVisible} 0.8s ease-in-out;
`

const ImageWrapper = styled.div`
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  max-width: 500px;
  max-height: 500px;
  margin-top: 2rem;
  z-index: 1;
  animation: ${turnVisible} 1.8s ease-in-out;
`

const Quote = styled.p`
  letter-spacing: 2px;
  line-height: 1.8;
  animation: ${turnVisible} 0.8s ease-in-out;
`

const Header = ({ siteTitle }) => (
  <header>
    <section
      style={{
        padding: `4rem 2rem`,
        display: `grid`,
        alignItems: `center`,
        gridTemplateColumns: `repeat(auto-fit, minmax(240px, 1fr))`,
        gap: `3%`,
        marginBottom: `6rem`,
      }}
    >
      <div style={element}>
        <Welcome style={{ marginTop: `-6rem` }}>Welcome to</Welcome>
        <MainHeading>{siteTitle}</MainHeading>
      </div>
      <div style={element}>
        <ImageWrapper>
          <img
            src={`${Mary}`}
            style={{ maxWidth: `500` }}
            alt="Illustration of Mary Wollstonecraft, made by artist Jess Ebsworth"
          />
        </ImageWrapper>
      </div>
      <article style={element}>
        <Quote>
          “I do not wish women to have power over men but over <b>themselves</b>
          ” <br />
          <i>A Vindication of the Rights of Woman (1792)</i>
        </Quote>
      </article>
    </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

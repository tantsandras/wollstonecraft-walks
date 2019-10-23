import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import styled, { keyframes } from "styled-components"
import "typeface-archivo-black"

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

const Welcome = styled.h2`
letter-spacing: 1px;
font-family: 'Archivo Black', Impact; 
font-display: block;
color: #333333;
animation: ${turnVisible} 0.8s ease-in-out;
`

const MainHeading = styled.h1`
color: #333333;
text-decoration: none;
text-align: center;
font-family: 'Archivo Black'; Impact;
font-display: block;
font-weight: bolder;
z-index: 1;
line-height: 1.5;
font-size: 2rem;
margin-top: 4rem;
margin-bottom: -1rem;
letter-spacing: 1px;
animation: ${turnVisible} 0.8s ease-in-out;
`

const ImageWrapper = styled.div`
max-width: 500px;
max-height: 500px;
z-index: 1;
animation: ${turnVisible} 0.8s ease-in-out;
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
  }}>
    <div style={element}>
    <Welcome style={{marginTop: `-6rem`}}>Welcome to</Welcome>
        <MainHeading> 
          {siteTitle}
        </MainHeading>
      </div>
      <div style={element}>
      <ImageWrapper>
      <Image />
      </ImageWrapper>
    </div>
    <article style={element}>
<Quote>“I do not wish women to have power over men but over <b>themselves</b>” <br />
<i>A Vindication of the Rights of Woman (1792)</i></Quote>
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

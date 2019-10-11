import React from "react"
import SEO from "../components/seo"
import Menu from "../components/menu"
import styled, { keyframes } from "styled-components"
import AandR from "../components/annaRebecca"

const fadeInRight = keyframes`
    from {
      opacity: 0;
      transform: translateX(-15px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `

const turnVisible = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

const growLeft = keyframes`
  from {
	transform: scaleX(0);
  }
  to {
	transform: scaleX(1);
  }
  `

const OrgList = styled.ul`
  font-weight: 200;
  cursor: pointer;
  list-style: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: Open Sans;
  animation: ${turnVisible} 0.8s ease-in-out;
`

const StyledLink = styled.a`
    z-index: 3;
    font-family: Open Sans;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    opacity: 0;
    color: #656565;
    animation: ${fadeInRight} ease 0.6s forwards;
    animation-delay: 0.2s;
    &:hover {
      text-decoration: none;
      color: MediumBlue;
      cursor: pointer;
    }
`

const Second = styled.div`
align-self: left;
width: 40%;
margin: 0em 1rem 2.4rem 0em;
height: 0.06em;
background-color: pink;
transform: scaleX(0);
transform-origin: left;
animation: ${growLeft} cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.6s forwards;
`
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
const ContactPage = () => {
  return (
    <section style={{ fontFamily: `Open Sans` }}>
      <SEO title="Contact" />
      <MenuContrast>
      <span></span>
      <span></span>
      <span></span>
      </MenuContrast>
      <Menu />
      <AandR />

      <article style={{ padding: `3% 10% 3% 10%` }}>
        <h4
          style={{
            fontFamily: `'Archivo Black', Impact`,
            fontSize: `1.6rem`,
            paddingBottom: `1rem`,
            letterSpacing: `2%`,
          }}
        >
          Community Links
        </h4>
        <OrgList>
          <li>
            <StyledLink href="https://www.wollstonecraftpresents.com/" target="_blank" rel="noopener noreferrer">
              Wollstonecraft Presents
            </StyledLink>
          </li>
          <Second></Second>
          <li>
            <StyledLink href="https://www.maryonthegreen.org/" target="_blank" rel="noopener noreferrer">Mary on the Green</StyledLink>
          </li>
          <Second></Second>
          <li>
            <StyledLink href="https://www.wollstonecraftsociety.org/" target="_blank" rel="noopener noreferrer">
              The Wollstonecraft Society
            </StyledLink>
          </li>
          <Second></Second>
          <li>
            <StyledLink href="https://twitter.com/mw_fellowship" target="_blank" rel="noopener noreferrer">
              Wollstonecraft Fellowship
            </StyledLink>
          </li>
          <Second></Second>
          <li>
            <StyledLink href="http://www.marywollstonecraftphilosophicalsociety.org/" target="_blank" rel="noopener noreferrer">
              Wollstonecraft philosophical Society
            </StyledLink>
          </li>
          <Second></Second>
          <li>
            <StyledLink href="http://gal-dem.com/" target="_blank" rel="noopener noreferrer">Gal-dem</StyledLink>
          </li>
          <Second></Second>
          <li>
            <StyledLink href="http://www.sistersuncut.org/" target="_blank" rel="noopener noreferrer">Sisters Uncut</StyledLink>
          </li>
          <Second></Second>
          <li>
            <StyledLink href="https://www.unfinishedhistories.com/" target="_blank" rel="noopener noreferrer">
              Unfinished Histories
            </StyledLink>
          </li>
          <Second></Second>
          <li>
            <StyledLink href="https://www.rampsonthemoon.co.uk/" target="_blank" rel="noopener noreferrer">Ramps on the Moon</StyledLink>
          </li>
          <Second></Second>
          <li>
            <StyledLink href="http://wollstonecraftlive.com/fm/" target="_blank" rel="noopener noreferrer">
              Fragments & Monuments
            </StyledLink>
          </li>
          <Second></Second>
          <li>
            <StyledLink href="https://scarylittlegirls.co.uk/" target="_blank" rel="noopener noreferrer">Scary Little Girls</StyledLink>
          </li>
          <Second></Second>
        </OrgList>
      </article>
    </section>
  )
}

export default ContactPage

import React from "react"
import SEO from "../components/seo"
import Menu from "../components/menu"
import styled, { keyframes } from "styled-components"
import AandR from "../components/annaRebecca"
import "typeface-archivo-black"

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
  font-family: Helvetica, Roboto, "Open Sans";
  animation: ${turnVisible} 0.8s ease-in-out;
`

const StyledLink = styled.a`
  font-weight: normal;
  z-index: 3;
  font-family: Helvetica, Roboto, "Open Sans";
  font-size: 0.9rem;
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
  width: 100%;
  margin: 0em 1rem 2.4rem 0em;
  height: 0.06em;
  background-color: pink;
  transform: scaleX(0);
  transform-origin: left;
  animation: ${growLeft} cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.6s forwards;
`
const MenuContrast = styled.div`
height: 40px;
width: 44px;
position: absolute;
right: 16px;
top: 22px;
z-index: 1;
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
    <section style={{ fontFamily: `Helvetica, Roboto, 'Open Sans'` }}>
      <SEO title="Contact" />
      <MenuContrast>
        <span></span>
        <span></span>
        <span></span>
      </MenuContrast>
      <Menu />
      <AandR />

      <article style={{ padding: `12% 10% 3% 10%`, maxWidth: `900px` }}>
        <h4
          style={{
            fontFamily: `'Archivo Black', 'Impact'`,
            fontSize: `1.6rem`,
            paddingBottom: `4rem`,
            letterSpacing: `2%`,
            color: `#333333`,
            marginTop: `2rem`,
          }}
        >
          Community Links
        </h4>
        <OrgList>
          <li>
            <StyledLink
              href="https://www.wollstonecraftpresents.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wollstonecraft Presents
            </StyledLink>
          </li>
          <Second></Second>
          <li>
            <StyledLink
              href="https://www.maryonthegreen.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `0.4s` }}
            >
              Mary on the Green
            </StyledLink>
          </li>
          <Second style={{ animationDelay: `0.6s` }}></Second>
          <li>
            <StyledLink
              href="https://www.wollstonecraftsociety.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `0.6s` }}
            >
              The Wollstonecraft Society
            </StyledLink>
          </li>
          <Second style={{ animationDelay: `0.8s` }}></Second>
          <li>
            <StyledLink
              href="https://twitter.com/mw_fellowship"
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `0.8s` }}
            >
              Wollstonecraft Fellowship
            </StyledLink>
          </li>
          <Second style={{ animationDelay: `1s` }}></Second>
          <li>
            <StyledLink
              href="http://www.marywollstonecraftphilosophicalsociety.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `1s` }}
            >
              Wollstonecraft philosophical Society
            </StyledLink>
          </li>
          <Second style={{ animationDelay: `1.2s` }}></Second>
          <li>
            <StyledLink
              href="http://gal-dem.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `1.2s` }}
            >
              Gal-dem
            </StyledLink>
          </li>
          <Second style={{ animationDelay: `1.4s` }}></Second>
          <li>
            <StyledLink
              href="http://www.sistersuncut.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `1.4s` }}
            >
              Sisters Uncut
            </StyledLink>
          </li>
          <Second style={{ animationDelay: `1.6s` }}></Second>
          <li>
            <StyledLink
              href="https://www.unfinishedhistories.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `1.6s` }}
            >
              Unfinished Histories
            </StyledLink>
          </li>
          <Second style={{ animationDelay: `1.8s` }}></Second>
          <li>
            <StyledLink
              href="https://www.rampsonthemoon.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `1.8s` }}
            >
              Ramps on the Moon
            </StyledLink>
          </li>
          <Second style={{ animationDelay: `2s` }}></Second>
          <li>
            <StyledLink
              href="http://wollstonecraftlive.com/fm/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `2s` }}
            >
              Fragments & Monuments
            </StyledLink>
          </li>
          <Second style={{ animationDelay: `2.2s` }}></Second>
          <li>
            <StyledLink
              href="https://scarylittlegirls.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `2.2s` }}
            >
              Scary Little Girls
            </StyledLink>
          </li>
          <Second style={{ animationDelay: `2.4s` }}></Second>
          <li>
            <StyledLink
              href="http://www.dissenters.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `2.4s` }}
            >
              DissentersN16
            </StyledLink>
          </li>
          <Second style={{ animationDelay: `2.6s` }}></Second>
        </OrgList>
      </article>
    </section>
  )
}

export default ContactPage

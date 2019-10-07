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
  font-family: Helvetica;
  animation: ${turnVisible} 0.8s ease-in-out;
  > .Odd {
    text-decoration: none;
    color: #656565;
    opacity: 0;
    animation: ${fadeInRight} ease 0.6s forwards;
    animation-delay: 0.2s;
  };
  &:hover {
    text-decoration: none;
    color: Crimson;
    cursor: pointer;
  }
  > .Second {
    align-self: left;
    width: 100%;
    margin: 0em 1rem 2.4rem 0em;
    height: 0.06em;
    background-color: black;
    transform: scaleX(0);
    transform-origin: left;
    animation: ${growLeft};
  };
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
    <section style={{ fontFamily: `Helvetica` }}>
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
            fontFamily: `Yeseva One`,
            fontSize: `1.6rem`,
            paddingBottom: `1rem`,
            letterSpacing: `2%`,
          }}
        >
          Community Links
        </h4>
        <OrgList>
          <li className="Odd">
            <a href="https://www.wollstonecraftpresents.com/" target="_blank" rel="noopener noreferrer">
              Wollstonecraft Presents
            </a>
          </li>
          <div className="Second"></div>
          <li className="Odd">
            <a href="https://www.maryonthegreen.org/" target="_blank" rel="noopener noreferrer">Mary on the Green</a>
          </li>
          <div className="Second"></div>
          <li className="Odd">
            <a href="https://www.wollstonecraftsociety.org/" target="_blank" rel="noopener noreferrer">
              The Wollstonecraft Society
            </a>
          </li>
          <div className="Second"></div>
          <li className="Odd">
            <a href="https://twitter.com/mw_fellowship" target="_blank" rel="noopener noreferrer">
              Wollstonecraft Fellowship
            </a>
          </li>
          <div className="Second"></div>
          <li className="Odd">
            <a href="http://www.marywollstonecraftphilosophicalsociety.org/" target="_blank" rel="noopener noreferrer">
              Wollstonecraft philosophical Society
            </a>
          </li>
          <div className="Second"></div>
          <li className="Odd">
            <a href="http://gal-dem.com/" target="_blank" rel="noopener noreferrer">Gal-dem</a>
          </li>
          <div className="Second"></div>
          <li className="Odd">
            <a href="http://www.sistersuncut.org/" target="_blank" rel="noopener noreferrer">Sisters Uncut</a>
          </li>
          <div className="Second"></div>
          <li className="Odd">
            <a href="https://www.unfinishedhistories.com/" target="_blank" rel="noopener noreferrer">
              Unfinished Histories
            </a>
          </li>
          <div className="Second"></div>
          <li className="Odd">
            <a href="https://www.rampsonthemoon.co.uk/" target="_blank" rel="noopener noreferrer">Ramps on the Moon</a>
          </li>
          <div className="Second"></div>
          <li className="Odd">
            <a href="http://wollstonecraftlive.com/fm/" target="_blank" rel="noopener noreferrer">
              Fragments & Monuments
            </a>
          </li>
          <div className="Second"></div>
          <li className="Odd">
            <a href="https://scarylittlegirls.co.uk/" target="_blank" rel="noopener noreferrer">Scary Little Girls</a>
          </li>
          <div className="Second"></div>
        </OrgList>
      </article>
    </section>
  )
}

export default ContactPage

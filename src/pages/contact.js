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
  & ${OrgList}:nth-child(odd) {
    text-decoration: none;
    color: #656565;
    opacity: 0;
    animation: ${fadeInRight} ease 0.6s forwards;
    animation-delay: 0.2s;
  }

  & ${OrgList}:nth-child(odd):hover {
    text-decoration: none;
    color: MediumBlue;
    cursor: pointer;
  }
  & ${OrgList}:nth-child(2n) {
    align-self: left;
    width: 40%;
    margin: 0em 1rem 2.4rem 0em;
    height: 0.06em;
    background-color: pink;
    transform: scaleX(0);
    transform-origin: left;
    animation: ${growLeft} cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.6s forwards;
  }
  & ${OrgList}:nth-child(3) {
    animation-delay: 0.4s;
  }

  & ${OrgList}:nth-child(4) {
    animation-delay: 0.8s;
  }

  & ${OrgList}:nth-child(5) {
    animation-delay: 0.6s;
  }

  & ${OrgList}:nth-child(6) {
    animation-delay: 1s;
  }

  & ${OrgList}:nth-child(7) {
    animation-delay: 0.8s;
  }

  & ${OrgList}:nth-child(8) {
    animation-delay: 1.2s;
  }

  & ${OrgList}:nth-child(9) {
    animation-delay: 1s;
  }

  & ${OrgList}:nth-child(10) {
    animation-delay: 1.4s;
  }

  & ${OrgList}:nth-child(11) {
    animation-delay: 1.2s;
  }

  & ${OrgList}:nth-child(12) {
    animation-delay: 1.6s;
  }

  & ${OrgList}:nth-child(13) {
    animation-delay: 1.4s;
  }

  & ${OrgList}:nth-child(14) {
    animation-delay: 1.8s;
  }

  & ${OrgList}:nth-child(15) {
    animation-delay: 1.6s;
  }

  & ${OrgList}:nth-child(16) {
    animation-delay: 2s;
  }

  & ${OrgList}:nth-child(17) {
    animation-delay: 1.8s;
  }

  & ${OrgList}:nth-child(18) {
    animation-delay: 2.2s;
  }

  & ${OrgList}:nth-child(19) {
    animation-delay: 2s;
  }

  & ${OrgList}:nth-child(20) {
    animation-delay: 2.4s;
  }
  & ${OrgList}:nth-child(21) {
    animation-delay: 2.2s;
  }

  & ${OrgList}:nth-child(20) {
    animation-delay: 2.6s;
  }
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
          <li>
            <a href="https://www.wollstonecraftpresents.com/" target="_blank" rel="noopener noreferrer">
              Wollstonecraft Presents
            </a>
          </li>
          <div></div>
          <li>
            <a href="https://www.maryonthegreen.org/" target="_blank" rel="noopener noreferrer">Mary on the Green</a>
          </li>
          <div></div>
          <li>
            <a href="https://www.wollstonecraftsociety.org/" target="_blank" rel="noopener noreferrer">
              The Wollstonecraft Society
            </a>
          </li>
          <div></div>
          <li>
            <a href="https://twitter.com/mw_fellowship" target="_blank" rel="noopener noreferrer">
              Wollstonecraft Fellowship
            </a>
          </li>
          <div></div>
          <li>
            <a href="http://www.marywollstonecraftphilosophicalsociety.org/" target="_blank" rel="noopener noreferrer">
              Wollstonecraft philosophical Society
            </a>
          </li>
          <div></div>
          <li>
            <a href="http://gal-dem.com/" target="_blank" rel="noopener noreferrer">Gal-dem</a>
          </li>
          <div></div>
          <li>
            <a href="http://www.sistersuncut.org/" target="_blank" rel="noopener noreferrer">Sisters Uncut</a>
          </li>
          <div></div>
          <li>
            <a href="https://www.unfinishedhistories.com/" target="_blank" rel="noopener noreferrer">
              Unfinished Histories
            </a>
          </li>
          <div></div>
          <li>
            <a href="https://www.rampsonthemoon.co.uk/" target="_blank" rel="noopener noreferrer">Ramps on the Moon</a>
          </li>
          <div></div>
          <li>
            <a href="http://wollstonecraftlive.com/fm/" target="_blank" rel="noopener noreferrer">
              Fragments & Monuments
            </a>
          </li>
          <div></div>
          <li>
            <a href="https://scarylittlegirls.co.uk/" target="_blank" rel="noopener noreferrer">Scary Little Girls</a>
          </li>
          <div></div>
        </OrgList>
      </article>
    </section>
  )
}

export default ContactPage

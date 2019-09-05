
import React from "react"
import SEO from "../components/seo"
import Menu from "../components/menu"
import styled, { keyframes } from "styled-components"

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
  font-family: Helvetica;
  animation: ${turnVisible} 0.8s ease-in-out;
  &:nth-child(odd) {
    text-decoration: none;
    color: #656565;
    opacity: 0;
    animation: ${fadeInRight} ease 0.6s forwards;
    animation-delay: 0.2s;
  }

  &:nth-child(odd):hover {
    text-decoration: none;
    color: MediumBlue;
    cursor: pointer;
  }
  &:nth-child(2n) {
    align-self: left;
    width: 40%;
    margin: 0em 1rem 2.4rem 0em;
    height: 0.06em;
    background-color: pink;
    transform: scaleX(0);
    transform-origin: left;
    animation: ${growLeft} cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.6s forwards;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }

  &:nth-child(4) {
    animation-delay: 0.8s;
  }

  &:nth-child(5) {
    animation-delay: 0.6s;
  }

  &:nth-child(6) {
    animation-delay: 1s;
  }

  &:nth-child(7) {
    animation-delay: 0.8s;
  }

  &:nth-child(8) {
    animation-delay: 1.2s;
  }

  &:nth-child(9) {
    animation-delay: 1s;
  }

  &:nth-child(10) {
    animation-delay: 1.4s;
  }

  &:nth-child(11) {
    animation-delay: 1.2s;
  }

  &:nth-child(12) {
    animation-delay: 1.6s;
  }

  &:nth-child(13) {
    animation-delay: 1.4s;
  }

  &:nth-child(14) {
    animation-delay: 1.8s;
  }

  &:nth-child(15) {
    animation-delay: 1.6s;
  }

  &:nth-child(16) {
    animation-delay: 2s;
  }

  &:nth-child(17) {
    animation-delay: 1.8s;
  }

  &:nth-child(18) {
    animation-delay: 2.2s;
  }

  &:nth-child(19) {
    animation-delay: 2s;
  }

  &:nth-child(20) {
    animation-delay: 2.4s;
  }
  &:nth-child(21) {
    animation-delay: 2.2s;
  }

  &:nth-child(20) {
    animation-delay: 2.6s;
  }

`


const ContactPage = () => (
    <section style={{fontFamily: `Helvetica`}}>
      <SEO title="Contact" />
      <Menu />

      <h3 style={{textAlign: `center`, paddingTop: `10%`, fontFamily: `Yeseva One`, fontSize: `1.6rem`,}}>Keep in touch!</h3>
      <article style={{padding: `3% 10% 3% 10%`}}>
        
<p>Production hub and arts charity Scary Little Girls hope you have enjoyed this Living
Literature Event. If you have any comments, rave reviews or suggestions for the future,
we'd love to hear from you. Please email us at info@scarylittlegirls.co.uk and visit us at
www.scarylittlegirls.co.uk or message us on Facebook and Twitter Scary @ScaryLittleGs
FB Scary </p>


<p>Keep in touch and follow our updates for more volunteer opportunities and exciting
Wollstonecraft Walks events!
Anna Birch, Fragments and Monuments performance and film
director@fragmentsandmonuments.com
Twitter Anna Birch @anna_birch1
Instagram Anna Birch annabirch1</p></article>

  <article style={{padding: `3% 10% 3% 10%`}}>
      <h4 style={{fontFamily: `Yeseva One`, fontSize: `1.6rem`, paddingBottom: `1rem`, letterSpacing: `2%`}}>Community Links</h4>
      <OrgList>
      <li><a href="https://www.wollstonecraftpresents.com/">Wollstonecraft Presents</a></li>
      <div></div>
      <li><a href="https://www.maryonthegreen.org/">Mary on the Green</a></li>
      <div></div>
      <li><a href="https://www.wollstonecraftsociety.org/">The Wollstonecraft Society</a></li>
      <div></div>
      <li><a href="https://twitter.com/mw_fellowship">Wollstonecraft Fellowship</a></li>
      <div></div>
      <li><a href="http://www.marywollstonecraftphilosophicalsociety.org/">Wollstonecraft philosophical Society</a></li>
      <div></div>
      <li><a href="http://gal-dem.com/">Gal-dem</a></li>
      <div></div>
      <li><a href="http://www.sistersuncut.org/">Sisters Uncut</a></li>
      <div></div>
      <li><a href="https://www.unfinishedhistories.com/">Unfinished Histories</a></li>
      <div></div>
      <li><a href="https://www.rampsonthemoon.co.uk/">Ramps on the Moon</a></li>
      <div></div>
      <li><a href="http://wollstonecraftlive.com/fm/">Fragments and Monuments</a></li>
      <div></div>
      <li><a href="https://scarylittlegirls.co.uk/">Scary Little Girls</a></li>
      <div></div>
      </OrgList>
      </article>
    </section>
  )
  
  export default ContactPage
  
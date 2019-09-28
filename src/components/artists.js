import React from "react"
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

const ArtList = styled.ul`
  font-weight: 200;
  cursor: pointer;
  list-style: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: Helvetica;
  margin-bottom: 4rem;
  animation: ${turnVisible} 0.8s ease-in-out;
  & ${ArtList}:nth-child(odd) {
    text-decoration: none;
    color: #656565;
    opacity: 0;
    animation: ${fadeInRight} ease 0.6s forwards;
    animation-delay: 0.2s;
  }

  & ${ArtList}:nth-child(odd):hover {
    text-decoration: none;
    color: MediumBlue;
    cursor: pointer;
  }
  & ${ArtList}:nth-child(2n) {
    align-self: left;
    width: 40%;
    margin: 0em 1rem 2.4rem 0em;
    height: 0.06em;
    background-color: pink;
    transform: scaleX(0);
    transform-origin: left;
    animation: ${growLeft} cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.6s forwards;
  }
  & ${ArtList}:nth-child(3) {
    animation-delay: 0.4s;
  }

  & ${ArtList}:nth-child(4) {
    animation-delay: 0.8s;
  }

  & ${ArtList}:nth-child(5) {
    animation-delay: 0.6s;
  }

  & ${ArtList}:nth-child(6) {
    animation-delay: 1s;
  }

  & ${ArtList}:nth-child(7) {
    animation-delay: 0.8s;
  }

  & ${ArtList}:nth-child(8) {
    animation-delay: 1.2s;
  }

  & ${ArtList}:nth-child(9) {
    animation-delay: 1s;
  }

  & ${ArtList}:nth-child(10) {
    animation-delay: 1.4s;
  }

  & ${ArtList}:nth-child(11) {
    animation-delay: 1.2s;
  }

  & ${ArtList}:nth-child(12) {
    animation-delay: 1.6s;
  }

  & ${ArtList}:nth-child(13) {
    animation-delay: 1.4s;
  }

  & ${ArtList}:nth-child(14) {
    animation-delay: 1.8s;
  }

  & ${ArtList}:nth-child(15) {
    animation-delay: 1.6s;
  }

  & ${ArtList}:nth-child(16) {
    animation-delay: 2s;
  }

  & ${ArtList}:nth-child(17) {
    animation-delay: 1.8s;
  }

  & ${ArtList}:nth-child(18) {
    animation-delay: 2.2s;
  }

  & ${ArtList}:nth-child(19) {
    animation-delay: 2s;
  }

  & ${ArtList}:nth-child(20) {
    animation-delay: 2.4s;
  }
  & ${ArtList}:nth-child(21) {
    animation-delay: 2.2s;
  }

  & ${ArtList}:nth-child(20) {
    animation-delay: 2.6s;
  }
`

const ArtistList = () => {
  return (
    <article style={{ padding: `5% 10% 3% 10%`, fontFamily: `Helvetica` }}>
      <ArtList>
        <li>
          <a
            href="http://wollstonecraftlive.com/fm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Artistic Director & Producer - Anna Birch
          </a>
        </li>
        <div></div>
        <li>
          <a
            href="https://scarylittlegirls.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Artistic Director & Producer, Rebecca Mordan
          </a>
        </li>
        <div></div>
        <li>
          <a href="bla" target="_blank" rel="noopener noreferrer">
            Film Maker - Ali Sargent
          </a>
        </li>

        <div></div>
        <li>
          <a href="bla" target="_blank" rel="noopener noreferrer">
            Podcast Producers - Marina Garvey Birch and Erica McCoy
          </a>
        </li>
        <div></div>
        <li>
          <a href="bla" target="_blank" rel="noopener noreferrer">
            Specially composed musical score - Alastair Gavin
          </a>
        </li>
        <div></div>
        <li>
          <a
            href="https://www.christinebradshawphotography.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Images of first walk at Stoke Newington Literary Festival -
            Christine Bradshaw
          </a>
        </li>
        <div></div>
        <li>
          <a
            href="http://jessebsworth.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Image and Publicity Design - Jess Ebsworth
          </a>
        </li>
        <div></div>
        <li>
          <a href="bla" target="_blank" rel="noopener noreferrer">
            Social Media - Marina Garvey Birch
          </a>
        </li>
        <div></div>
      </ArtList>
      <section style={{ marginBottom: `6rem` }}>
        <p>
          <i
            style={{
              fontSize: `1.2rem`,
              letterSpacing: `2px`,
              lineHeight: `2`,
            }}
          >
            Volunteers
          </i>
          <br />
          <br />
          Jessie Krish, Jude Cox, Sophie Persson, Unity Arts, Georgia Patience,
          Israel Meriomame Wekpe, Jenny Kay, Marina Garvey Birch
        </p>
        <p style={{marginTop: `4rem`}}>
          <i
            style={{
              fontSize: `1.2rem`,
              letterSpacing: `2px`,
              lineHeight: `2`,
            }}
          >
            Huge thanks to
          </i>
          <br />
          <br />
          Adrian Walker; Dickon Knowles; John Knowles, Cat, Liz and all at JKC
          Marketing; Lawrence and all the members of The Mildmay Club; Roberta
          Wedge; Abi and all the staff and Newington Green Primary School; Lizzy
          and all at Lizzy’s Cafe; Andy Pakula and all at New Unity, Mary on the
          Green; Emma Clery; Stewy; Marina Garvey Birch; Jessica Garvey Birch;
          Steve Garvey; Wollstonecraft Presents; Lil at Unity Arts; Stoke
          Newington Literary Festival; Olivia at Lady Mildmay Inn, Mildmay
          Community Partnership, High Class Shoes, N1.
        </p>
      </section>
    </article>
  )
}

export default ArtistList

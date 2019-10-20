import React from "react"
import styled, { keyframes } from "styled-components"
import Instagram from "../images/icons/Instagram.png"
import Twitter from "../images/icons/Twitter.png"
import Email from "../images/icons/Email.png"
import Facebook from "../images/icons/Facebook.png"

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
  letter-spacing: 1px;
  font-family: Roboto, 'Open Sans';
  margin-bottom: 4rem;
  animation: ${turnVisible} 0.8s ease-in-out;
`
const StyledLink = styled.a`
  z-index: 3;
  font-family: Roboto, 'Open Sans';
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
  width: 70%;
  margin: 0em 1rem 4rem 0em;
  height: 0.06em;
  background-color: pink;
  transform: scaleX(0);
  transform-origin: left;
  animation: ${growLeft} cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.6s forwards;
`

const Icon = styled.img`
  max-width: 40px;
  float: left;
  margin-top: -0.3rem;
  cursor: pointer;
  animation: ${fadeInRight} ease 0.6s forwards;
`

const Social = styled.span`
  padding-top: 1rem;
  display: inline-block;
  text-align: left;
  vertical-align: middle;
  list-style: none;
  width: 100%;
  text-decoration: none;
  animation: ${fadeInRight} ease 0.6s forwards;
`

const Handle = styled.a`
line-height: 1.8;
font-size: 0.8rem;
  margin-left: 40px;
  text-decoration: none;
  color: #656565;
  letter-spacing: 1px;
  animation: ${fadeInRight} ease 0.6s forwards;
  &:hover {
    text-decoration: none;
    color: MediumBlue;
    cursor: pointer;
  }
`
const Normal = styled.p`
line-height: 1.8;
`

const Credits = styled.h5`
font-family: Roboto, 'Open Sans';
letter-spacing: 2px;
font-weight: lighter;
font-size: 1rem;
line-height: 1.8;
`

const ArtistList = () => {
  return (
    <article style={{ padding: `5% 10% 3% 10%`, fontFamily: `Roboto, 'Open Sans'` }}>
      <ArtList>
        <li>
          <StyledLink
            href="http://wollstonecraftlive.com/fm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Artistic Director & Producer - Anna Birch
          </StyledLink>
          <Social style={{ marginTop: `1.4rem` }}>
            <Handle
              href="https://twitter.com/anna_birch1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={Twitter} />
              @anna_birch
            </Handle>
          </Social>
          <Social>
            <Handle
              href="https://www.instagram.com/annabirch1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={Instagram} />
              @annabirch1
            </Handle>
          </Social>
        </li>
        <Second></Second>
        <li>
          <StyledLink
            href="https://scarylittlegirls.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `0.4s` }}
          >
            Artistic Director & Producer - Rebecca Mordan
          </StyledLink>
          <Social style={{ marginTop: `1.4rem`}}>
            <Handle
              href="https://twitter.com/scarylittlegs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={Twitter} />
              @ScaryLittleGs
            </Handle>
          </Social>
          <Social>
            <Handle
              href="https://twitter.com/_rebeccamordan"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <Icon src={Twitter} />
              @_RebeccaMordan
            </Handle>
          </Social>
        </li>
        <Second style={{ animationDelay: `0.6s` }}></Second>
        <li>
          <StyledLink
            href="https://www.alimaeve.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `0.6s` }}
          >
            Film Maker - Ali Meave Sargent
          </StyledLink>
        </li>

        <Second style={{ animationDelay: `0.8s` }}></Second>
        <li>
          <StyledLink style={{ animationDelay: `0.8s` }}>
            Podcast Producer - Marina Garvey Birch
          </StyledLink>
        </li>
        <Second style={{ animationDelay: `1s` }}></Second>
        <li>
          <StyledLink style={{ animationDelay: `1s` }}>
            Podcast Producer - Erica McCoy
          </StyledLink>
          <Social style={{ marginTop: `1.4rem`,}}>
            <Handle
              href="https://twitter.com/Erica_Mckoy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={Twitter} />
              @Erica_Mckoy
            </Handle>
          </Social>
          <Social>
            <Handle
              href="https://www.instagram.com/ericamckoy_/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={Instagram} />
              @ericamckoy_
            </Handle>
          </Social>
          <Social>
            <Handle
              href="https://www.facebook.com/TheElektrikCave/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={Facebook} />
              @TheElektrikCave
            </Handle>
          </Social>
        </li>
        <Second style={{ animationDelay: `1.2s` }}></Second>
        <li>
          <StyledLink
            href="https://www.discogs.com/artist/124155-Alastair-Gavin"
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `1.2s` }}
          >
            Composer - Alastair Gavin
          </StyledLink>
        </li>
        <Second style={{ animationDelay: `1.4s` }}></Second>
        <li>
          <StyledLink
            href="https://www.christinebradshawphotography.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `1.4s` }}
          >
            Photographer - Christine Bradshaw
          </StyledLink>
        </li>
        <Second style={{ animationDelay: `1.6s` }}></Second>
        <li>
          <StyledLink style={{ animationDelay: `1.6s` }}>
            Actor - Don One
          </StyledLink>
          <Social style={{ marginTop: `1.4rem`,}}>
            <Handle
              href="https://twitter.com/Don1birmingham"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={Twitter} />
              @don1birmingham
            </Handle>
          </Social>
          <Social>
            <Handle
              href="https://www.instagram.com/don1birmingham/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={Instagram} />
              @don1birmingham
            </Handle>
          </Social>
          <Social>
            <Handle
              href="https://www.facebook.com/pg/don1birmingham"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={Facebook} />
              @don1birmingham
            </Handle>
          </Social>
        </li>
        <Second style={{ animationDelay: `1.8s` }}></Second>
        <li>
          <StyledLink
            href="http://jessebsworth.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `1.8s` }}
          >
            Image and Publicity Design - Jess Ebsworth
          </StyledLink>
        </li>
        <Second style={{ animationDelay: `2s` }}></Second>
        <li>
          <StyledLink
            style={{ animationDelay: `2s` }}
          >
            Actor - Caroline Parker
          </StyledLink>
        </li>
        <Second style={{ animationDelay: `2.2s` }}></Second>
        <li>
          <StyledLink style={{ animationDelay: `2.2s` }}>
            Actor - Rebecca Boey
          </StyledLink>
          <Social style={{ marginTop: `1.4rem`,}}>
            <Handle
              href="https://twitter.com/becboey"
              style={{ textDecoration: `none` }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={Twitter} />
              @becboey
            </Handle>
          </Social>
        </li>
        <Second style={{ animationDelay: `2.4s` }}></Second>
        <li>
          <StyledLink
            href="https://sandragrahl.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `2.4s` }}
          >
            Software Developer - Sandra Grahl
          </StyledLink>
        </li>
        <Second style={{ animationDelay: `2.6s` }}></Second>
      </ArtList>
      <section style={{ marginBottom: `6rem` }}>
        
      <Credits style={{ marginTop: `4rem` }}>
           Volunteers
          </Credits>
        <Normal>
          Jessie Krish, Jude Cox, Sophie Persson, Unity Arts, Georgia Patience,
          Israel Meriomame Wekpe, Jenny Kay, Marina Garvey Birch
        </Normal>

          <Credits style={{ marginTop: `4rem` }}>
            Huge thanks to
          </Credits>
        <Normal>

          Adrian Walker; Dickon Knowles; John Knowles, Cat, Liz and all at JKC
          Marketing; Lawrence and all the members of The Mildmay Club; Roberta
          Wedge; Abi and all the staff and Newington Green Primary School; Lizzy
          and all at Lizzy’s Cafe; Andy Pakula and all at New Unity, Mary on the
          Green; Emma Clery; Stewy; Marina Garvey Birch; Jessica Garvey Birch;
          Steve Garvey; Wollstonecraft Presents; Lil at Unity Arts; Stoke
          Newington Literary Festival; Olivia at Lady Mildmay Inn, Mildmay
          Community Partnership, High Class Shoes, N1.
        </Normal>
      </section>
    </article>
  )
}

export default ArtistList

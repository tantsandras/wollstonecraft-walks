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
  font-family: Helvetica;
  margin-bottom: 4rem;
  animation: ${turnVisible} 0.8s ease-in-out;
`
  const StyledLink = styled.a`
  z-index: 3;
  font-family: Helvetica;
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
`

const Social = styled.span`
padding-top: 1rem;
display: inline-block;
text-align: left;
vertical-align: middle;
list-style: none;
width: 100%;
text-decoration: none;
`

const Handle = styled.a`
margin-left: 40px;
text-decoration: none;
color: #656565;
letter-spacing: 1px;
&:hover {
  text-decoration: none;
  color: MediumBlue;
  cursor: pointer;
}
`

const ArtistList = () => {
  return (
    <article style={{ padding: `5% 10% 3% 10%`, fontFamily: `Helvetica` }}>
      <ArtList>
        <li>
          <StyledLink
            href="http://wollstonecraftlive.com/fm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Artistic Director & Producer - Anna Birch
          </StyledLink>
          <Social style={{marginTop: `1.4rem`}}><a href="https://twitter.com/anna_birch1" target="_blank" rel="noopener noreferrer"><Icon src={Twitter} /></a><Handle>@anna_birch1</Handle></Social>
          <Social><a href="https://www.instagram.com/annabirch1/" target="_blank" rel="noopener noreferrer"><Icon src={Instagram} /></a><Handle>@annabirch1</Handle></Social>
        </li>
        <Second></Second>
        <li> 
          <StyledLink
            href="https://scarylittlegirls.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Artistic Director & Producer - Rebecca Mordan
            
          </StyledLink>
          <Social style={{marginTop: `1.4rem`}}><a href="https://twitter.com/scarylittlegs" target="_blank" rel="noopener noreferrer"><Icon src={Twitter} /><Handle>@ScaryLittleGs</Handle></a></Social>
          <Social><a href="https://twitter.com/_rebeccamordan" target="_blank" rel="noopener noreferrer"><Icon src={Twitter} /><Handle>@_RebeccaMordan</Handle></a></Social>
        </li>
        <Second></Second>
        <li> 
          <StyledLink href="https://www.alimaeve.com" target="_blank" rel="noopener noreferrer">
            Film Maker - Ali Meave Sargent

          </StyledLink>
        </li>

        <Second></Second>
        <li> 
          <StyledLink>
            Podcast Producer - Marina Garvey Birch
          </StyledLink>
        </li>
        <Second></Second>
        <li> 
          <StyledLink>
            Podcast Producer - Erica McCoy
          </StyledLink>
          <Social style={{marginTop: `1.4rem`}}><a href="https://twitter.com/Erica_Mckoy" target="_blank" rel="noopener noreferrer"><Icon src={Twitter} /><Handle>@Erica_Mckoy</Handle></a></Social>
          <Social><a href="https://www.instagram.com/ericamckoy_/?hl=en" target="_blank" rel="noopener noreferrer"><Icon src={Instagram} /><Handle>@ericamckoy_</Handle></a></Social>
          <Social><a href="https://www.facebook.com/TheElektrikCave/" target="_blank" rel="noopener noreferrer"><Icon src={Facebook} /><Handle>@TheElektrikCave</Handle></a></Social>
        </li>
        <Second></Second>
        <li> 
          <StyledLink href="bla" target="_blank" rel="noopener noreferrer">
            Composer - Alastair Gavin
          </StyledLink>
        </li>
        <Second></Second>
        <li> 
          <StyledLink
            href="https://www.christinebradshawphotography.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Photographer -
            Christine Bradshaw
          </StyledLink>
        </li>
        <Second></Second>
        <li> 
          <StyledLink>
            Actor - Don One
          </StyledLink>
          <Social style={{marginTop: `1.4rem`}}><a href="https://twitter.com/Don1birmingham" target="_blank" rel="noopener noreferrer"><Icon src={Twitter} /><Handle>@don1birmingham</Handle></a></Social>
          <Social><a href="https://www.instagram.com/don1birmingham/" target="_blank" rel="noopener noreferrer"><Icon src={Instagram} /><Handle>@don1birmingham</Handle></a></Social>
          <Social><a href="https://www.facebook.com/pg/don1birmingham" target="_blank" rel="noopener noreferrer"><Icon src={Facebook} /><Handle>@don1birmingham</Handle></a></Social>
        </li>
        <Second></Second>
        <li> 
          <StyledLink
            href="http://jessebsworth.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Image and Publicity Design - Jess Ebsworth
          </StyledLink>
        </li>
        <Second></Second>
        <li> 
          <StyledLink
            target="_blank"
            rel="noopener noreferrer"
          >
            Actor - Caroline Parker
          </StyledLink>
        </li>
        <Second></Second>
        <li> 
          <StyledLink>
            Actor - Rebecca Boey
          </StyledLink>
          <Social style={{marginTop: `1.4rem`}}><a href="https://twitter.com/becboey" target="_blank" rel="noopener noreferrer"><Icon src={Twitter} /><Handle>@becboey</Handle></a></Social>
        </li>
        <Second></Second>
        <li> 
          <StyledLink href="https://sandragrahl.netlify.com" target="_blank" rel="noopener noreferrer">
            Software Developer - Sandra Grahl
          </StyledLink>
        </li>
        <Second></Second>
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

import { Link } from "gatsby"
import React from "react"
import styled, { css, keyframes } from "styled-components"
import logo from "../images/logo2.png"

const MenuIcon = styled.div`
  height: 30px;
  width: 30px;
  position: absolute;
  z-index: 3;
  right: 20px;
  top: 30px;
  cursor: pointer;
  & > * {
    height: 2px;
    width: 30px;
    display: block;
    margin-bottom: 4px;
    background-color: black;
  }
`
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

const animation1 = css`
  animation: ${fadeInRight} ease 0.6s forwards;
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
const animation2 = css`
  animation: ${growLeft} cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.6s forwards;
`

const NavActive = styled.div`
  z-index: 2;
  text-transform: uppercase;
  text-decoration: none;
  height: 100vh;
  position: fixed;
  margin: 0;
  padding: 3rem;
  top: 0%;
  right: 0%;
  background: #fadadd;
  boxshadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: Helvetica, Roboto, 'Open Sans';
  letter-spacing: 1px;
  animation: ${turnVisible} 0.8s ease-in-out;
`

const StyledLink = styled(Link)`
  z-index: 3;
  font-family: Helvetica, Roboto, 'Open Sans';
  text-transform: uppercase;
  font-weight: normal;
  letter-spacing: 1px;
  text-decoration: none;
  opacity: 0;
  color: #656565;
  animation: ${fadeInRight} ease 0.6s forwards;
  animation-delay: 0.2s;
  &:hover {
    text-decoration: none;
    color: Crimson;
    cursor: pointer;
  }
`

const Second = styled.div`
  z-index: 3;
  animation-delay: 0.8s;
  align-self: left;
  width: 100%;
  margin: 0em 1rem 2.4rem 0em;
  height: 0.06em;
  background-color: black;
  transform: scaleX(0);
  transform-origin: left;
  animation: ${growLeft} cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.6s forwards;
  &:hover {
    text-decoration: none;
    background-color: Crimson;
    cursor: pointer;
  }
`

const NavList = styled.ul`
  margin: 0;
  padding: 4rem 10px 18px 10px;
  top: 5%;
  width: 100%;
  text-align: left;
  font-weight: 200;
  cursor: pointer;
  list-style: none;
  animation: ${turnVisible} 0.8s ease-in-out;
  text-decoration: none;
`

const StyledLogo = styled.img`
  height: 70px;
  width: 120px;
  position: fixed;
  z-index: 3;
  right: 0px;
  top: 15px;
  cursor: pointer;
  outline: none;
`

const activeStyle = {
  color: `black`,
  textDecoration: `none`,
}

class Menu extends React.Component {
  constructor() {
    super()
    this.state = {
      isActive: false,
      hover: false,
    }
  }

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    return (
      <div>
        {!this.state.isActive && (
          <MenuIcon onClick={this.handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </MenuIcon>
        )}
        {this.state.isActive && (
          <StyledLogo src={logo} alt={"Logo"} onClick={this.handleClick} />
        )}
        <div>
          {this.state.isActive && (
            <NavActive>
              <NavList>
                <StyledLink to="/" activeStyle={activeStyle}>
                  {"Home"}

                  <Second></Second>
                </StyledLink>
                <StyledLink
                  to="/podcast"
                  activeStyle={activeStyle}
                  style={{ animationDelay: `0.4s` }}
                >
                  {"Podcast"}

                  <Second style={{ animationDelay: `0.6s` }}></Second>
                </StyledLink>
                <StyledLink
                  to="/media"
                  activeStyle={activeStyle}
                  style={{ animationDelay: `0.6s` }}
                >
                  {"Media"}

                  <Second style={{ animationDelay: `0.8s` }}></Second>
                </StyledLink>
                <StyledLink
                  to="/gallery"
                  activeStyle={activeStyle}
                  style={{ animationDelay: `0.8s` }}
                >
                  {"Gallery"}

                  <Second style={{ animationDelay: `1s` }}></Second>
                </StyledLink>
                <StyledLink
                  to="/heritage-research"
                  activeStyle={activeStyle}
                  style={{ animationDelay: `1s` }}
                >
                  {"Heritage Research"}

                  <Second style={{ animationDelay: `1.2s` }}></Second>
                </StyledLink>
                <StyledLink
                  to="/artists"
                  activeStyle={activeStyle}
                  style={{ animationDelay: `1.2s` }}
                >
                  {"Artists"}

                  <Second style={{ animationDelay: `1.4s` }}></Second>
                </StyledLink>
                <StyledLink
                  to="/contact"
                  activeStyle={activeStyle}
                  style={{ animationDelay: `1.4s` }}
                >
                  {"Contact"}

                  <Second style={{ animationDelay: `1.6s` }}></Second>
                </StyledLink>
                <StyledLink
                  to="/fm-preformance-and-film-archive"
                  activeStyle={activeStyle}
                  style={{ animationDelay: `1.6s` }}
                >
                  {"Fragments & Monuments"} <br></br>{" "}
                  {"preformance and film archive"}
                  <Second style={{ animationDelay: `1.8s` }}></Second>
                </StyledLink>
              </NavList>
            </NavActive>
          )}
        </div>
      </div>
    )
  }
}

export default Menu

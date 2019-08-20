import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"
import logo from "../images/logo2.png"

const MenuIcon = styled.div`
  height: 30px;
  width: 30px;
  position: fixed;
  z-index: 3;
  right: 20px;
  top: 30px;
  cursor: pointer;
  & ${MenuIcon} > * {
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

const Nav = styled.div`
  width: 10%;
  height: 100vh;
  position: fixed;
  right: 0%;
`

const turnVisible = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
		transform: translateX(0%) translateY(0%);
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

const NavActive = styled.div`
  z-index: 2;
  text-transform: uppercase;
  height: 100vh;
  position: fixed;
  margin: 0;
  padding: 3rem;
  top: 0%;
  right: 0%;
  background: #fadadd;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  animation: ${turnVisible} 0.8s ease-in-out;
  & ${NavActive}:nth-child(1) {
    text-decoration: none;
    color: #656565;
    opacity: 0;
    animation: ${fadeInRight} ease 0.6s forwards;
    animation-delay: 0.2s;
  }

  & ${NavActive}:nth-child(1):hover {
    text-decoration: none;
    color: MediumBlue;
    cursor: pointer;
  }
  & ${NavActive}:nth-child(2) {
    align-self: left;
    width: 100%;
    margin: 0em 1rem 2.4rem 0em;
    height: 0.06em;
    background-color: black;
    transform: scaleX(0);
    transform-origin: left;
    animation: ${growLeft} cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.8s forwards;
  }
  & ${NavActive}:nth-child(3) {
    text-decoration: none;
    color: #656565;
    opacity: 0;
    animation: ${fadeInRight} ease 0.6s forwards;
    animation-delay: 0.6s;
  }

  & ${NavActive}:nth-child(3):hover {
    text-decoration: none;
    color: MediumBlue;
    cursor: pointer;
  }

  & ${NavActive}:nth-child(4) {
    align-self: left;
    width: 100%;
    margin: 0em 1rem 2.4rem 0em;
    height: 0.06em;
    background-color: black;
    transform: scaleX(0);
    transform-origin: left;
    animation: ${growLeft} cubic-bezier(0.785, 0.135, 0.15, 0.86) 1.2s forwards;
  }
  & ${NavActive}:nth-child(5) {
    text-decoration: none;
    color: #656565;
    opacity: 0;
    animation: ${fadeInRight} ease 0.6s forwards;
    animation-delay: 1s;
  }

  & ${NavActive}:nth-child(5):hover {
    text-decoration: none;
    color: MediumBlue;
    cursor: pointer;
  }
  & ${NavActive}:nth-child(6) {
    align-self: left;
    width: 100%;
    margin: 0em 1rem 2.4rem 0em;
    height: 0.06em;
    background-color: black;
    transform: scaleX(0);
    transform-origin: left;
    animation: ${growLeft} cubic-bezier(0.785, 0.135, 0.15, 0.86) 1.6s forwards;
  }
  & ${NavActive}:nth-child(7) {
    text-decoration: none;
    color: #656565;
    opacity: 0;
    animation: ${fadeInRight} ease 0.6s forwards;
    animation-delay: 1.4s;
  }

  & ${NavActive}:nth-child(7):hover {
    text-decoration: none;
    color: MediumBlue;
    cursor: pointer;
  }
  & ${NavActive}:nth-child(8) {
    align-self: left;
    width: 100%;
    margin: 0em 1rem 2.4rem 0em;
    height: 0.06em;
    background-color: black;
    transform: scaleX(0);
    transform-origin: left;
    animation: ${growLeft} cubic-bezier(0.785, 0.135, 0.15, 0.86) 2s forwards;
  }
`

const NavList = styled.ul`
  margin: 0;
  padding: 10px;
  top: 5%;
  width: 100%;
  text-align: left;
  font-weight: 200;
  cursor: pointer;
  list-style: none;
`

const StyledLogo = styled.img`
  box-shadow: none;
  animation: ${turnVisible} 0.8s ease-in-out;
  height: 70px;
  width: 120px;
  position: fixed;
  z-index: 3;
  right: 20px;
  top: 30px;
  cursor: pointer;
`

const activeStyle = {
  color: `black`,
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
          {!this.state.isActive && (<MenuIcon onClick={this.handleClick}>
		  <span></span>
          <span></span>
          <span></span>
      </MenuIcon>)}
      {this.state.isActive && <StyledLogo src={logo} alt={"Logo"} onClick={this.handleClick} />}
        <div>
          {!this.state.isActive && <Nav />}
          {this.state.isActive && (
            <NavActive>
              <div
                class="nav__content"
                style={{ paddingTop: `2rem`, margin: `0`, zIndex: `2` }}
              >
                <NavList>
                  <Link to="/" activeStyle={activeStyle}>
                    {"Home"}
                  </Link>
                  <div></div>
                  <Link to="/about" activeStyle={activeStyle}>
                    {"About"}
                  </Link>
                  <div></div>
                  <Link to="/heritage-research" activeStyle={activeStyle}>
                    {"Heritage research"}
                  </Link>
                  <div></div>
                  <Link to="/contact" activeStyle={activeStyle}>
                    Contact
                  </Link>
                  <div></div>
                </NavList>
              </div>
            </NavActive>
          )}
        </div>
      </div>
    )
  }
}

export default Menu

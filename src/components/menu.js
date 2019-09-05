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
  &> * {
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

const animation2 = () => 
    css`
      ${fadeInRight} ease 0.6s forwards;
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
	}
`

const animation1 = () => 
  css`
    ${turnVisible} 0.8s ease-in-out;
  `

const growLeft = keyframes`
  from {
	transform: scaleX(0);
  }
  to {
	transform: scaleX(1);
  }
  `

const animation3 = () => 
  css`
    ${growLeft} cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.6s forwards;
  `

const NavActive = {
  zIndex: `2`,
  textTransform: `uppercase`,
  height: `100vh`,
  position: `fixed`,
  margin: `0`,
  padding: `3rem`,
  top: `0%`,
  right: `0%`,
  background: `#fadadd`,
  boxshadow: `0px 0px 4px 0px rgba(0, 0, 0, 0.25)`,
  fontFamily: `Helvetica`,
  animation: `${animation1}`,  
  
  '&:nth-child(odd)': {
    textdecoration: `none`,
    color: `#656565`,
    opacity: `0`,
    animation: `${animation2}`,
    animationDelay: `0.2s`,

  '&:nth-child(odd):hover': {
    textDecoration: `none`,
    color: `MediumBlue`,
    cursor: `pointer`,

  '&:nth-child(2n)': {
    alignSelf: `left`,
    width: `100%`,
    margin: `0em 1rem 2.4rem 0em`,
    height: `0.06em`,
    backgroundColor: `black`,
    transform: `scaleX(0)`,
    transformOrigin: `left`,
    animation: `${animation3}`,

  '&:nth-child(3)': {
    animationDelay: `0.4s`,

  '&:nth-child(4)': {
    animationDelay: `0.8s`,

  '&:nth-child(5)': {
    animationDelay: `0.6s`,

  '&:nth-child(6)': {
    animationDelay: `1s`,

  '&:nth-child(7)': {
    animationDelay: `0.8s`,

  '&:nth-child(8)': {
    animationDelay: `1.2s`,

  '&:nth-child(9)': {
    animationDelay: `1s`,

  '&:nth-child(10)': {
    animationDelay: `1.4s`,

  '&:nth-child(11)': {
    animationDelay: `1.2s`,

  '&:nth-child(12)': {
    animationDelay: `1.6s`,

  '&:nth-child(13)': {
    animationDelay: `1.4s`,

  '&:nth-child(14)': {
    animationDelay: `1.8s`,

  '&:nth-child(15)': {
    animationDelay: `1.6s`,

  '&:nth-child(16)': {
    animationDelay: `2s`,
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
}
}

const NavList = styled.ul`
  margin: 0;
  padding: 4rem 10px 10px 10px;
  top: 5%;
  width: 100%;
  text-align: left;
  font-weight: 200;
  cursor: pointer;
  list-style: none;
`

const StyledLogo = styled.img`
  animation: ${turnVisible} 0.8s ease-in-out;
  height: 70px;
  width: 120px;
  position: fixed;
  z-index: 3;
  right: 0px;
  top: 15px;
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
            <div style={NavActive}>
                <NavList>
                  <Link to="/" activeStyle={activeStyle}>
                    {"Home"}
                  </Link>
                  <div></div>
                  <Link to="/podcast" activeStyle={activeStyle}>
                    {"Podcast"}
                  </Link>
                  <div></div>
                  <Link to="/media" activeStyle={activeStyle}>
                    {"Media"}
                  </Link>
                  <div></div>
                  <Link to="/gallery" activeStyle={activeStyle}>
                    {"Gallery"}
                  </Link>
                  <div></div>
                  <Link to="/heritage-research" activeStyle={activeStyle}>
                    {"Heritage Research"}
                  </Link>
                  <div></div>
                  <Link to="/artists" activeStyle={activeStyle}>
                    {"Artists"}
                  </Link>
                  <div></div>
                  <Link to="/contact" activeStyle={activeStyle}>
                    {"Contact"}
                  </Link>
                  <div></div>
                  <Link to="/fm-preformance-and-film-archive" activeStyle={activeStyle}>
                    {"Fragments & Monuments"} <br></br> {"preformance & film archive"}
                  </Link>
                  <div></div>
                </NavList>
              </div>
          )}
        </div>
      </div>
    )
  }
}

export default Menu

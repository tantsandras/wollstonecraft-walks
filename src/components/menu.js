import { Link } from "gatsby"
import React from "react"
import styled, { keyframes } from "styled-components"
import logo from "../images/logo2.png"

const MenuIcon = styled.button`
  height: 40px;
  width: 44px;
  position: absolute;
  right: 16px;
  top: 21px;
  z-index: 3;
  cursor: pointer;
  background: none;
  border: none;
  & > * {
    height: 2px;
    width: 30px;
    display: block;
    margin-bottom: 4px;
    background-color: black;
  }
  &:focus {
    outline-width: 0.6px;
    outline-color: red;
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

const NavActive = styled.div`
  overflow: scroll;
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
  font-family: Helvetica, Roboto, "Open Sans";
  letter-spacing: 1px;
  animation: ${turnVisible} 0.8s ease-in-out;
`

const StyledLink = styled(Link)`
display: block;
  z-index: 3;
  font-family: Helvetica, Roboto, "Open Sans";
  text-transform: uppercase;
  font-weight: normal;
  letter-spacing: 1px;
  text-decoration: none;
  opacity: 0;
  color: #656565;
  width: 100%;
  animation: ${fadeInRight} ease 0.2s forwards;
  animation-delay: 0.2s;
  &:hover {
    text-decoration: none;
    color: Crimson;
    cursor: pointer;
  }
`

const HoverLi = styled.li`
padding-top: 1.4rem;
padding-bottom: 0.4rem;
width: 100%;
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
  background-color: #656565;
  transform: scaleX(0);
  transform-origin: left;
  animation: ${growLeft} cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.2s forwards;
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
  right: -20px;
  top: 24px;
  cursor: pointer;
  outline: none;
  animation: ${turnVisible} 0.6s ease-in-out;
`

const LogoWrapper = styled.button`
position: fixed;
z-index: 3;
top: 24px;
height: 70px;
right: 27px;
width: 74px;
border: none;
border-radius: 50%;
-moz-border-radius: 50%;
-webkit-border-radius: 50%;
overflow: hidden;
animation: ${turnVisible} 0.6s ease-in-out;
&:hover {
  box-shadow: 0 20px 25px -5px rgba(255,0,0,.1), 0 20px 25px -5px rgba(255,0,0,.1);
}
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

  componentDidMount(){
    if (typeof window === 'undefined') {
      global.window = {}
    }

    window.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    window.removeEventListener("mousedown", this.handleClickOutside, false);
  }

  
  handleClick = () => {
    this.setState({ isActive: !this.state.isActive })
  }

  handleClickOutside = e => {
    if (this.el && !this.el.contains(e.target)) {
        this.setState({isActive: false})
    }
}

  render() {
    return (
      <div>
        {!this.state.isActive && (
          <MenuIcon onClick={this.handleClick} 
          id="menubutton"
          aria-haspopup="true"
          aria-controls="menu2"
          >
            <span></span>
            <span></span>
            <span></span>
          </MenuIcon>
        )}
        {this.state.isActive && (
          <LogoWrapper><StyledLogo src={logo} alt={"Logo"} onClick={this.handleClick} /></LogoWrapper>
        )}
        <div>
          {this.state.isActive && (
                      
            <NavActive ref={el => { this.el = el }} aria-expanded="true">
              <NavList id="menu2" role="menu" aria-labelledby="menubutton">
                <HoverLi>
                  <StyledLink to="/" activeStyle={activeStyle} role="menuitem">
                    {"Home"}

                    <Second></Second>
                  </StyledLink>
                </HoverLi>
                <HoverLi>
                  <StyledLink
                    to="/podcast"
                    activeStyle={activeStyle}
                    style={{ animationDelay: `0.4s` }}
                    role="menuitem"
                  >
                    {"Podcast"}

                    <Second style={{ animationDelay: `0.6s` }}></Second>
                  </StyledLink>
                </HoverLi>
                <HoverLi>
                  <StyledLink
                    to="/media"
                    activeStyle={activeStyle}
                    style={{ animationDelay: `0.6s` }}
                    role="menuitem"
                  >
                    {"Media"}

                    <Second style={{ animationDelay: `0.8s` }}></Second>
                  </StyledLink>
                </HoverLi>
                <HoverLi>
                  <StyledLink
                    to="/gallery"
                    activeStyle={activeStyle}
                    style={{ animationDelay: `0.8s` }}
                    role="menuitem"
                  >
                    {"Gallery"}

                    <Second style={{ animationDelay: `1s` }}></Second>
                  </StyledLink>
                </HoverLi>
                <HoverLi>
                  <StyledLink
                    to="/heritage-research"
                    activeStyle={activeStyle}
                    style={{ animationDelay: `1s` }}
                    role="menuitem"
                  >
                    {"Heritage Research"}

                    <Second style={{ animationDelay: `1.2s` }}></Second>
                  </StyledLink>
                </HoverLi>
                <HoverLi>
                  <StyledLink
                    to="/artists"
                    activeStyle={activeStyle}
                    style={{ animationDelay: `1.2s` }}
                    role="menuitem"
                  >
                    {"Artists"}

                    <Second style={{ animationDelay: `1.4s` }}></Second>
                  </StyledLink>
                </HoverLi>
                <HoverLi>
                  <StyledLink
                    to="/contact"
                    activeStyle={activeStyle}
                    style={{ animationDelay: `1.4s` }}
                    role="menuitem"
                  >
                    {"Contact"}

                    <Second style={{ animationDelay: `1.6s` }}></Second>
                  </StyledLink>
                </HoverLi>
                <HoverLi>
                  <StyledLink
                    to="/fm-preformance-and-film-archive"
                    activeStyle={activeStyle}
                    style={{ animationDelay: `1.6s` }}
                    role="menuitem"
                  >
                    {"Fragments & Monuments"} <br></br>{" "}
                    {"performance and film archive"}
                    <Second style={{ animationDelay: `1.8s` }}></Second>
                  </StyledLink>
                </HoverLi>
              </NavList>
            </NavActive>
          )}
        </div>
      </div>
    )
  }
}

export default Menu

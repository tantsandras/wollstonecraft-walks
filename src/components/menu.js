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
  height: 100vh;
  position: fixed;
  margin: 0;
  padding: 3rem;
  top: 0%;
  right: 0%;
  background: #fadadd;
  boxshadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: Helvetica;
  letter-spacing: 1px;
  animation: ${turnVisible} 0.8s ease-in-out;
  &:hover {
    text-decoration: none;
    color: Crimson;
    cursor: pointer;
  }
`

const odd = {
    textDecoration: `none`,
    color: `#656565`,
    opacity: `0`,
    animation: `${fadeInRight} ease 0.6s forwards`,
    animationDelay: `0.2s`,
}

const Second = styled.div`
align-self: left;
width: 100%;
margin: 0em 1rem 2.4rem 0em;
height: 0.06em;
background-color: black;
transform: scaleX(0);
transform-origin: left;
animation: ${animation2};
`

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
}

// const LinkAnimation = styled(animation1)`
// text-decoration: none;
// color: #656565;
// opacity: 0;
// animation-delay: ${props => (props.delay)};
// `

// const LineSpread = styled(animation2)`
// animation-delay: 0.8s;
// align-self: left;
// width: 100%;
// margin: 0em 1rem 2.4rem 0em;
// height: 0.06em;
// background-color: black;
// transform: scaleX(0);
// transform-origin: left;
// `

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
            <NavActive >
              <NavList>
                <Link
                  to="/"
                  activeStyle={activeStyle}
            style={odd}
                  // style={LinkAnimation}
                >
                  {"Home"}
                </Link>
                <Second
                // style={LineSpread}
                ></Second>
                <Link
                  to="/podcast"
                  activeStyle={activeStyle}
                    style={odd}
                  // delay={"0.4s"}
                  // style={LinkAnimation}
                >
                  {"Podcast"}
                </Link>
                <Second
                // style={LineSpread}
                ></Second>
                <Link
                  to="/media"
                  activeStyle={activeStyle}
                    style={odd}
                  // delay={"0.6s"}
                  // style={LinkAnimation}
                >
                  {"Media"}
                </Link>
                <Second
                // style={LineSpread}
                ></Second>
                <Link
                  to="/gallery"
                  activeStyle={activeStyle}
                    style={odd}
                  // delay={"0.8s"}
                  // style={LinkAnimation}
                >
                  {"Gallery"}
                </Link>
                <Second
                // style={LineSpread}
                ></Second>
                <Link
                  to="/heritage-research"
                  activeStyle={activeStyle}
                    style={odd}
                  // delay={"1s"}
                  // style={LinkAnimation}
                >
                  {"Heritage Research"}
                </Link>
                <Second
                // style={LineSpread}
                ></Second>
                <Link
                  to="/artists"
                  activeStyle={activeStyle}
                    style={odd}
                  // delay={"1.2s"}
                  // style={LinkAnimation}
                >
                  {"Artists"}
                </Link>
                <Second
                // style={LineSpread}
                ></Second>
                <Link
                  to="/contact"
                  activeStyle={activeStyle}
                    style={odd}
                  // delay={"1.4s"}
                  // style={LinkAnimation}
                >
                  {"Contact"}
                </Link>
                <Second
                // style={LineSpread}
                ></Second>
                <Link
                  to="/fm-preformance-and-film-archive"
                    style={odd}
                  activeStyle={activeStyle}
                  // delay={"1.6s"}
                  // style={LinkAnimation}
                >
                  {"Fragments & Monuments"} <br></br>{" "}
                  {"preformance and film archive"}
                </Link>
                <Second
                // style={LineSpread}
                ></Second>
              </NavList>
            </NavActive>
          )}
        </div>
      </div>
    )
  }
}

export default Menu

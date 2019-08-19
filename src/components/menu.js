import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"


const Header = styled.header`
  @extend %cf;
  color: "black";
  padding: "3em 5%";
  position: "relative";
  width: "90%";
  z-index: "2";
`

const MenuToggle = styled.div`
  @extend %cf;
  cursor: "pointer";
  float: "right";
  font-size: "0.875rem";
  transition: "all 0.3s ease-in-out";
  &.open {
    opacity: "0.5";
  }
`

const MenuToggleGrippy = styled.span`
  border-bottom: "5px solid black";
  border-top: "5px solid black";
  float: "left";
  line-height: "0";
  margin-right: "1em";
  padding: "5px 0";
  text-indent: "-999em";
  width: "35px";
  &:after {
    background: "#fff"
    content: "''";
    display: "block";
    height: "5px";
  }
`

const MenuToggleLabel = styled.span`
  float: "left";
  font-weight: "700";
  height: "25px";
  letter-spacing: "1px";
  line-height: "25px";
  text-transform: "uppercase";
`

const HiddenPanel = styled.div`
  background: "#333";
  color: "#666";
  font-size: "0.875rem";
  height: "100%";
  position: "absolute";
  right: "-250px";
  top: "0";
  width: "250px";
  a
    "color: #999";
    transition: "color 0.3s ease-out";
    &:hover {
      color: #fff
    }
`

const HiddenPanelClose = styled.div`
  color: "#666";
  cursor: "pointer";
  position: "absolute";
  right: "20px";
  top: "3.7em";
  transition: "color 0.3s ease-in-out";
  &:hover {
    color: "#fff";
  }
`

const HiddenPanelContent = styled.div`
  padding: "3.65em 10%";
`

const HiddenPanelNav = styled.nav`
  border-bottom: "1px solid #666";
  border-bottom: "1px solid rgba(#666, 0.25)";
  margin-bottom: "1.5em";
  padding-bottom: "1.5em";
  text-transform: "uppercase";
  h3
    letter-spacing: 1px
    margin-bottom: 1em
  ul
    list-style: none
    font-weight: 600
    margin: 0
    padding: 0
  li
    padding: 0.25em 0
`

class Menu extends React.Component {

    constructor() {
        super();
        this.state = {
          isActive: false
        };
      }


  handleClick = () => {

    if (this.state.isActive) {
    return HiddenPanel
    } else {
    return HiddenPanelClose
    }
  };


render() {
return (
<div>
<Header>
      <MenuToggle active={this.state.isActive} onClick={this.handleClick}>
        <MenuToggleGrippy></MenuToggleGrippy>
        <MenuToggleLabel>Menu</MenuToggleLabel>
      </MenuToggle>
    </Header>
    
    <HiddenPanel>
      
      <HiddenPanelContent>
        
        <HiddenPanelNav>
          <h3>Quick Look</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li></li>
            <li></li>
            <li>Contact</li>
          </ul>
        </HiddenPanelNav>
        
      </HiddenPanelContent>
    </HiddenPanel>
    </div>
        )
    }
}

export default Menu;


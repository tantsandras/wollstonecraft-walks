import React from "react"
import styled, { keyframes } from "styled-components"


const Continue = styled.button`
  padding: 0.6rem 2rem 0.6rem 1rem;
  font-size: 18px;
  background: #1451ad;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.25);
  font-family: Helvetica;
  text-align: center;
  letter-spacing: 0.04em;
  color: #ffd0d0;
  text-transform: uppercase;
  float: right;
  position: relative;
  min-width: 218px;
    overflow: hidden;
    cursor: pointer;
    border: none;
    border-radius: 2px;
    transition: background-color 0.2s ease;
    -webkit-transition: background-color 0.2s ease-out;
    -moz-transition: background-color 0.2s ease-out;
    -o-transition: background-color 0.2s ease-out;    

    &:hover {
        background-color: #ff0000;
        box-shadow: 0 0 0 2px rgb(255, 0, 0, 0.60);
        border: 2px solid white;
    }
`

const arrow = {
  border: `solid #FFD0D0`,
  borderWidth: `0px 1.6px 1.6px 0px`,
  display: `table-cell`,
  position: `absolute`,
  top: `30.5%`,
  right: `8%`,
  msTransform: `translateY(-50%)`,
  transform: `translateY(-50%)`,
  padding: `8px`,
  transform: `rotate(-45deg)`,
  WebkitTransform: `rotate(-45deg)`,
}

const ContinueButton = () => (
  <span
    style={{ height: `50px`, padding: `100px 50px 100px 50px`, float: `right` }}
  >
    <Continue>
      Continue walk<i style={arrow}></i>

    </Continue>
  </span>
)

export default ContinueButton

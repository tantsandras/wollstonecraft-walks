import React from "react"
import styled, { keyframes } from "styled-components"


const Back = styled.button`
  padding: 0.5rem 1rem 0.4rem 2rem;
  font-size: 18px;
  background: white;
  font-family: Open Sans;
  text-align: center;
  letter-spacing: 0.04em;
  color: black;
  text-transform: uppercase;
  position: absolute;
  left: 20px;
  top: 21px;
  min-width: 80px;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid white;
    border-radius: 2px;
    transition: background-color 0.2s ease;
    -webkit-transition: background-color 0.2s ease-out;
    -moz-transition: background-color 0.2s ease-out;
    -o-transition: background-color 0.2s ease-out;    

    &:hover {
        box-shadow: 0 0 0 2px rgb(255, 0, 0, 0.60);
        border: 2px solid #ffd0d0;
    }
`

const arrow = {
  border: `solid black`,
  borderWidth: `0px 1.6px 1.6px 0px`,
  display: `table-cell`,
  position: `absolute`,
  top: `30%`,
  left: `12%`,
  msTransform: `translateY(-50%)`,
  transform: `translateY(-50%)`,
  padding: `7.5px`,
  transform: `rotate(135deg)`,
  WebkitTransform: `rotate(135deg)`,
}

const BackButton = () => (
  <span
    style={{ height: `50px`, padding: `100px 50px 100px 50px`, float: `right` }}
  >
    <Back>
      <i style={arrow}></i>Back

    </Back>
  </span>
)

export default BackButton

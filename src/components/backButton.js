import React from "react"
import styled from "styled-components"


const Back = styled.button`
  padding: 1rem;
  background: white;
  color: black;
  position: absolute;
  left: 13px;
  top: 23px;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid white;
    border-radius: 2px;
`

const Arrow = styled.i`
  border: solid black;
  border-width: 0px 1.5px 1.5px 0px;
  display: table-cell;
  position: absolute;
  top: 29%;
  left: 14px;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  padding: 6px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  box-shadow: none;
  transition: border 0.2s ease;
  -webkit-transition: border 0.2s ease-out;
  -moz-transition: border 0.2s ease-out;
  -o-transition: border 0.2s ease-out;    
  &:hover {
    border: solid rgb(255, 0, 0, 0.80);
    border-width: 0px 1.6px 1.6px 0px;
  }
`

const BackButton = () => (
  <span
    style={{float: `right` }}
  >
    <Back>
      <Arrow />

    </Back>
  </span>
)

export default BackButton

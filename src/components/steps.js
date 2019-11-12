import styled from "styled-components"
import React from "react"
import StepBox from "../components/stepBox"

const boxList = {
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
  gridGap: `1rem`,
  columnGap: `10%`,
  margin: `0`,
  paddingBottom: `10em`
}

const SubHeading = styled.h2`
font-family: 'Archivo Black', 'Impact';
letter-spacing: 1px;
line-height: 1.5; 
color: #333333;
font-size: 1.2rem;
margin-top: 2rem;
`
const Credits = styled.h3`
font-family: Helvetica, Roboto, 'Open Sans';
letter-spacing: 2px;
font-weight: normal;
font-size: 1rem;
line-height: 1.8;
`

const Steps = () => (
  <>
  <SubHeading>A walk guide about Mary Wollstonecraft</SubHeading>
  <Credits>Take the walk through Newington Green, or, take the virtual walk.</Credits>
  <ul style={boxList}>
        <StepBox />
  </ul>
  </>
)

export default Steps

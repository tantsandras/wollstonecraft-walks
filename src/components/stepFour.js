import React from "react"
import styled, { keyframes } from "styled-components"

const StepCircle = styled.div`
  z-index: -1;
  position: relative;
  border-radius: 50%;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  line-height: 100px;
  background: rgba(93, 0, 255, 0.3);
  mix-blend-mode: multiply;
  text-align: center;
  vertical-align: middle;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
`

const StepNum = styled.p`
  font-family: Bungee Shade;
  z-index: 2;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  color: #5d00ff;
  text-align: center;
`
const Direction = styled.li`
  position: relative;
  padding-left: 2.4rem;
  padding-bottom: 1.4rem;
`
const Arrow = styled.i`
  border-style: solid;
  border-color: ${props => props.color};
  border-width: 0px 2px 2px 0px;
  display: table-cell;
  position: absolute;
  top: 0rem;
  left: 0%;
  ms-transform: translateY(-50%);
  transform: translateY(-50%);
  padding: 0.6rem;
  transform: rotate(-45deg);
  webkit-transform: rotate(-45deg);
`

class Step4 extends React.Component {
  render() {
    return (
      <main>
        <StepCircle style={{ marginTop: `-2rem` }}>
          <StepNum>3</StepNum>
        </StepCircle>
        <h3
          style={{
            fontFamily: `Yeseva One`,
            fontSize: `1.6rem`,
            textAlign: `center`,
            paddingTop: `1rem`,
          }}
        >
          Newington Green Primary School
        </h3>
        <article
          style={{ padding: `5% 10% 3% 10%`, fontFamily: `Helvetica` }}
        ></article>
      </main>
    )
  }
}

export default Step4

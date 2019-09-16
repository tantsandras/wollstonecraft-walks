import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"
import AudioPlayer from "../components/audioPlayer"
import Step5 from "../components/stepFive"
import Menu from "../components/menu"
import CanvasQuotes from "../components/canvasQuotes"

const element = {
  gridTemplateColumns: `repeat(4, 1fr)`,
  gridTemplateRows: `repeat(2, 300px)`,
  fontFamily: `Helvetica`,
}

const hero = {
  backgroundSize: `cover`,
  padding: `4rem 2rem`,
  display: `grid`,
  alignItems: `center`,
  gridTemplateColumns: `repeat(auto-fit, minmax(240px, 1fr))`,
}

class StepFivePage extends React.Component {
  constructor() {
    super()
    this.state = {
      isActive: false,
      hover: false,
    }
  }

  render() {
    return (
      <>
        <div
          style={{
            display: `grid`,
            justifyContent: `center`,
          }}
        >
          <AudioPlayer />
        </div>

        <Menu />

        <Step5 />
        <CanvasQuotes />
      </>
    )
  }
}

export default StepFivePage

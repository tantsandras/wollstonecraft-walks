import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"
import AudioPlayer from "../components/audioPlayer"
import ContinueButton from "../components/continueWalk"
import Step1 from "../components/stepOne"
import Menu from "../components/menu"

import AudioStepOne from "../audio/AudioStepOne.mp3"

class StepOnePage extends React.Component {
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
          <AudioPlayer track={AudioStepOne}/>
        </div>
        <Menu />
        <Step1 />
        <Link to={"/2"}><ContinueButton /></Link>
      </>
    )
  }
}

export default StepOnePage

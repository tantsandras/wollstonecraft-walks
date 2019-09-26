import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"
import AudioPlayer from "../components/audioPlayer"
import ContinueButton from "../components/continueWalk"
import Step3 from "../components/stepThree"
import Menu from "../components/menu"
import BackButton from "../components/backButton"
import AudioStepThree from "../audio/WW WALKS CHAPTER 3.mp3"

class StepThreePage extends React.Component {
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
        <div style={{
            display: `grid`,
            justifyContent: `center`}}>
                <AudioPlayer track={AudioStepThree} />

        </div>
        <Link to={"/2"}><BackButton /></Link>
        <Menu />
        <Step3 />
        <Link to={"/4"}><ContinueButton /></Link>
            </>
        )
    }
}

export default StepThreePage

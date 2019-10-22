import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"
import AudioPlayer from "../components/audioPlayer"
import ContinueButton from "../components/continueWalk"
import Step4 from "../components/stepFour"
import Menu from "../components/menu"
import BackButton from "../components/backButton"
import AudioStepFour from "../audio/WW WALKS CHAPTER 4.mp3"

const element = {
    gridTemplateColumns: `repeat(4, 1fr)`,
    gridTemplateRows: `repeat(2, 300px)`,
    fontFamily: `Helvetica, Roboto, 'Open Sans'`,
  }

const hero = {
    backgroundSize: `cover`,
    padding: `4rem 2rem`,
    display: `grid`,
    alignItems: `center`,
    gridTemplateColumns: `repeat(auto-fit, minmax(240px, 1fr))`,
}

class StepFourPage extends React.Component {
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
                <AudioPlayer track={AudioStepFour} />

        </div>
        <Link to={"/3"}><BackButton /></Link>
        <Menu />
        <Step4 />
        <Link to={"/5"}><ContinueButton /></Link>
            </>
        )
    }
}

export default StepFourPage

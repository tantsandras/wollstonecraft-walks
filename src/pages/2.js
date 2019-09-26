import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"
import AudioPlayer from "../components/audioPlayer"
import ContinueButton from "../components/continueWalk"
import Step2 from "../components/stepTwo"
import Menu from "../components/menu"
import BackButton from "../components/backButton"
import AudioStepTwo from "../audio/WW WALKS CHAPTER 2.mp3"

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

class StepTwoPage extends React.Component {
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
                <AudioPlayer track={AudioStepTwo} />

        </div>
        <Link to={"/1"}><BackButton /></Link>
        <Menu />
        <Step2 />
        <Link to={"/3"}><ContinueButton /></Link>

            </>
        )
    }
}

export default StepTwoPage

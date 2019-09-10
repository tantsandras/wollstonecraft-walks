import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"
import AudioPlayer from "../components/audioPlayer"
import ContinueButton from "../components/continueWalk"
import Step3 from "../components/stepThree"
import Menu from "../components/menu"


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
                <AudioPlayer />

        </div>
        <Menu />
        <Step3 />
        <Link to={"/4"}><ContinueButton /></Link>
            </>
        )
    }
}

export default StepThreePage

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"
import AudioPlayer from "../components/audioPlayer"
import Intro from "../components/intro"
import ContinueButton from "../components/continueWalk"
import Menu from "../components/menu"
import WhoIsMary from "../audio/WHO IS MW.mp3"
import BackButton from "../components/backButton"

class IntroPage extends React.Component {
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
                <AudioPlayer track={WhoIsMary}/>

        </div>
        <Link to={"/"}><BackButton /></Link>
            <Menu />
        <Intro />
        <Link to={"/1"} 
            activeStyle={{color: `white`}}
            ><ContinueButton /></Link>
            </>
        )
    }
}

export default IntroPage

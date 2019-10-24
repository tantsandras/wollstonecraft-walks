import { Link } from "gatsby"
import React from "react"
import styled, { keyframes } from "styled-components"
import AudioPlayer from "../components/audioPlayer"
import Intro from "../components/intro"
import ContinueButton from "../components/continueWalk"
import Menu from "../components/menu"
import WhoIsMary from "../audio/WHO IS MW.mp3"
import BackButton from "../components/backButton"
import "typeface-archivo-black"
import 'typeface-yeseva-one'

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
      <div style={{display: `grid`, justifyContent: `center`, alignItems: `center`, textAlign: `center`,}}>
        <div
          style={{
            display: `flex -webkit-box -moz-box -webkit-flex -ms-flexbox`,
            flexDirection: `row`,
            justifyContent: `center`,
            textAlign: `center`,
            alignContent: `center`,
          }}
        >
                <AudioPlayer track={WhoIsMary}/>

        </div>
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

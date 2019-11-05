import { Link } from "gatsby"
import React from "react"
import AudioPlayer from "../components/audioPlayer"
import ContinueButton from "../components/continueWalk"
import Step1 from "../components/stepOne"
import Menu from "../components/menu"
import BackButton from "../components/backButton"
import AudioStepOne from "../audio/WW_WALKS_CHAPTER_1.mp3"
import "typeface-archivo-black"
import 'typeface-yeseva-one'

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
      <div style={{display: `grid`, justifyContent: `center`, alignItems: `center`, textAlign: `center`,}}>
        <div
          style={{
            display: `flex -webkit-box -moz-box -webkit-flex -ms-flexbox`,
            flexDirection: `row`,
            justifyContent: `center`,
            textAlign: `center`,
            alignContent: `center`,
            fontFamily: `Helvetica, Roboto, "Open Sans"`,
            width: `100%`,
          }}
        >
          <AudioPlayer track={"https://docs.google.com/uc?export=download&id=11vAZl6xFy-T_vnfhoaRSvnwKnwN13cbE"} />
        </div>
        </div>
        <Link to={"/Intro"}>
          <BackButton />
        </Link>
        <Menu />
        <Step1 />
        <Link to={"/2"}>
          <ContinueButton />
        </Link>
      </>
    )
  }
}

export default StepOnePage

import { Link } from "gatsby"
import React from "react"
import AudioPlayer from "../components/audioPlayer"
import ContinueButton from "../components/continueWalk"
import Step4 from "../components/stepFour"
import Menu from "../components/menu"
import BackButton from "../components/backButton"
import AudioStepFour from "../audio/WW WALKS CHAPTER 4.mp3"
import "typeface-archivo-black"
import 'typeface-yeseva-one'

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
      <div style={{display: `grid`, justifyContent: `center`, alignItems: `center`, textAlign: `center`,}}>
        <div
          style={{
            display: `flex -webkit-box -moz-box -webkit-flex -ms-flexbox`,
            flexDirection: `row`,
            justifyContent: `center`,
            textAlign: `center`,
            alignContent: `center`,
            fontFamily: `Helvetica, Roboto, "Open Sans"`
          }}
        >
          <AudioPlayer track={AudioStepFour} />
        </div>
        </div>
        <Link to={"/3"}>
          <BackButton />
        </Link>
        <Menu />
        <Step4 />
        <Link to={"/5"}>
          <ContinueButton />
        </Link>
      </>
    )
  }
}

export default StepFourPage

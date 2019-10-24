import { Link } from "gatsby"
import React from "react"
import AudioPlayer from "../components/audioPlayer"
import ContinueButton from "../components/continueWalk"
import Step2 from "../components/stepTwo"
import Menu from "../components/menu"
import BackButton from "../components/backButton"
import AudioStepTwo from "../audio/WW WALKS CHAPTER 2.mp3"
import "typeface-archivo-black"
import 'typeface-yeseva-one'

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
          <AudioPlayer track={AudioStepTwo} />
        </div>
        </div>
        <Link to={"/1"}>
          <BackButton />
        </Link>
        <Menu />
        <Step2 />
        <Link to={"/3"}>
          <ContinueButton />
        </Link>
      </>
    )
  }
}

export default StepTwoPage

import { Link } from "gatsby"
import React from "react"
import AudioPlayer from "../components/audioPlayer"
import ContinueButton from "../components/continueWalk"
import Step1 from "../components/stepOne"
import Menu from "../components/menu"
import BackButton from "../components/backButton"
import AudioStepOne from "../audio/WW WALKS CHAPTER 1.mp3"
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
        <div
          style={{
            display: `grid`,
            justifyContent: `center`,
          }}
        >
          <AudioPlayer track={AudioStepOne} />
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

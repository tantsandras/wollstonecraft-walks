import { Link } from "gatsby"
import React from "react"
import AudioPlayer from "../components/audioPlayer"
import Step5 from "../components/stepFive"
import Menu from "../components/menu"
import BackButton from "../components/backButton"
import AudioStepFive from "../audio/WALK GUIDE CHAPTER 5.mp3"
import "typeface-archivo-black"
import 'typeface-yeseva-one'

class StepFivePage extends React.Component {
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
          <AudioPlayer track={AudioStepFive} />
        </div>
        <Link to={"/4"}>
          <BackButton />
        </Link>
        <Menu />

        <Step5 />
      </>
    )
  }
}

export default StepFivePage

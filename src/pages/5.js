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
          <AudioPlayer track={AudioStepFive} />
        </div>
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

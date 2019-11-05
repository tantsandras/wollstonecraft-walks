import { Link } from "gatsby"
import React from "react"
import AudioPlayer from "../components/audioPlayer"
import ContinueButton from "../components/continueWalk"
import Step3 from "../components/stepThree"
import Menu from "../components/menu"
import BackButton from "../components/backButton"
import AudioStepThree from "../audio/WW_WALKS_CHAPTER_3.mp3"
import "typeface-archivo-black"
import 'typeface-yeseva-one'

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
          <AudioPlayer track={"https://docs.google.com/uc?export=download&id=1LNbHKrp4dhwtUYNEw1gHQ3pAWttybqEB"} />
        </div>
        </div>
        <Link to={"/2"}>
          <BackButton />
        </Link>
        <Menu />
        <Step3 />
        <Link to={"/4"}>
          <ContinueButton />
        </Link>
      </>
    )
  }
}

export default StepThreePage

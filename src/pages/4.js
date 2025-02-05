import { Link } from "gatsby"
import React from "react"
import AudioPlayer from "../components/audioPlayer"
import ContinueButton from "../components/continueWalk"
import Step4 from "../components/stepFour"
import Menu from "../components/menu"
import BackButton from "../components/backButton"
import "typeface-archivo-black"
import "typeface-yeseva-one"

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
        <div
          style={{
            display: `grid`,
            justifyContent: `center`,
            alignItems: `center`,
            textAlign: `center`,
          }}
        >
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
            <AudioPlayer
              track={
                "https://dl.dropbox.com/scl/fi/vcaxw2a4ml16k53wwsvxc/WW_WALKS_CHAPTER_4.mp3?rlkey=cz7rw72s5u5fino6ctnsesg0d&st=8jpglnfr"
              }
            />
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

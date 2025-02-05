import { Link } from "gatsby"
import React from "react"
import AudioPlayer from "../components/audioPlayer"
import Step5 from "../components/stepFive"
import Menu from "../components/menu"
import BackButton from "../components/backButton"
import "typeface-archivo-black"
import "typeface-yeseva-one"

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
                "https://dl.dropbox.com/scl/fi/981819mtmrrocnzde74wl/WALK_GUIDE_CHAPTER_5.mp3?rlkey=n5mzbpkwl8ofws3hdxcx5eev3&st=buf41j49"
              }
            />
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

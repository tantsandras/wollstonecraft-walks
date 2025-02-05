import { Link } from "gatsby"
import React from "react"
import AudioPlayer from "../components/audioPlayer"
import Intro from "../components/intro"
import ContinueButton from "../components/continueWalk"
import Menu from "../components/menu"
import BackButton from "../components/backButton"
import "typeface-archivo-black"
import "typeface-yeseva-one"

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
                "https://dl.dropbox.com/scl/fi/b8woskk9eeg0zs4pe0t4h/WHO_IS_MW.mp3?rlkey=te5eizi9s046ej9rojey02qnz&st=geapnh2o"
              }
            />
          </div>
        </div>
        <Link to={"/"}>
          <BackButton />
        </Link>
        <Menu />
        <Intro />
        <Link to={"/1"} activeStyle={{ color: `white` }}>
          <ContinueButton />
        </Link>
      </>
    )
  }
}

export default IntroPage

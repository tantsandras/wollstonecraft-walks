import { Link } from "gatsby"
import React from "react"
import AudioPlayer from "../components/audioPlayer"
import ContinueButton from "../components/continueWalk"
import Step2 from "../components/stepTwo"
import Menu from "../components/menu"
import BackButton from "../components/backButton"
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
      <GlobalStyle />
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
          <AudioPlayer track={"https://docs.google.com/uc?export=download&id=1GbaEhOxKnoQbWbAqdCdyofS8WvpsDhNP"} />
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

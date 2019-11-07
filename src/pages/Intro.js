import { Link } from "gatsby"
import React from "react"
import AudioPlayer from "../components/audioPlayer"
import Intro from "../components/intro"
import ContinueButton from "../components/continueWalk"
import Menu from "../components/menu"
import BackButton from "../components/backButton"
import "typeface-archivo-black"
import 'typeface-yeseva-one'

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
                <AudioPlayer track={"https://docs.google.com/uc?export=download&id=1a-EJK_AXbO14IfisJf33eZO9bIwgsuad"}/>

        </div>
        </div>
        <Link to={"/"}><BackButton /></Link>
            <Menu />
        <Intro />
        <Link to={"/1"} 
            activeStyle={{color: `white`}}
            ><ContinueButton /></Link>
            </>
        )
    }
}

export default IntroPage

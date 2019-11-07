import { Link } from "gatsby"
import React from "react"
import AudioPlayer from "../components/audioPlayer"
import ContinueButton from "../components/continueWalk"
import Step2 from "../components/stepTwo"
import Menu from "../components/menu"
import BackButton from "../components/backButton"
import "typeface-archivo-black"
import 'typeface-yeseva-one'
import { Helmet } from "react-helmet"


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
            <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: "description",
            content: "Walk guide app about Mary Wollstonecraft",
          },
          {
            name: "keywords",
            content:
              "marywollstonecraft, wollstonecraft, walkguide, historiclondon, newingtongreen, feminism, britishfeminists, herstory, londonwalks, britishhistory, fragments&monuments",
          },
        ]}
      >
        <html lang="en" style={{fontFamily: `'Archivo Black', Impact, sans-serif`}}/>
        <link rel="canonical" href="https://wollstonecraftwalks.netlify.com" />

<meta name="google-site-verification" content="ZtGNrohmz3XFRtLU30FDSYpxw4d5jQe70PdolyjkVes" />
      </Helmet>
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

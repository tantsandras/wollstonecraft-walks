import React from "react"
import styled, { keyframes } from "styled-components"
import Trailer from "../images/videos/WollstonecraftWalkstrailer2019 (1).mp4"
import WLLive from "../images/videos/WLLive3m38sFINAL.mp4"
import AudioPlayer from "../components/audioPlayer"
import Soundscape from "../audio/WL Walk soundscape.mp3"
import MWBirthday from "../images/videos/MWbirthday.mp4"


const VideoList = styled.li`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.98);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  list-style: none;
  height: auto;
  background: #191919; 
  color: white;
`

const Overlay = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  &:hover {
    opacity: 0.6;
  }
`
const Hover = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background: rgb(245, 245, 245);
  &:hover {
    opacity: 0.6;
  }
`

const MainHeading = styled.h1`
  font-family: 'Archivo Black', Impact;
  font-size: 2.4rem;
  text-align: center;
  letter-spacing: 1px;
  margin-top: -10rem;
  padding-left: 8rem;
`

const LocalVideo = styled.video`
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  max-width: 640px;
  max-height: 385px;
  float: right;
`

const Video = styled.iframe`
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
`

const Videos = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(300px, 2fr));
  grid-gap: 1rem;
  padding: 6rem 2rem 4rem 2rem;
  column-gap: 4%;
  margin: 0 auto;
  grid-template-rows: repeat(3, auto);
  justify-content: center;
  font-family: Open Sans;
`
const SoundBox = styled.li`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.98);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  list-style: none;
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`
const PageCircle = styled.div`
  position: relative;
  border-radius: 50%;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  line-height: 200px;
  background: rgba(255, 0, 0, 0.1);
  mix-blend-mode: multiply;
  text-align: center;
  vertical-align: middle;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
`
const PageHeading = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border-left: 6px double #ff0000;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  position: relative;
  clip-path: circle(50%);
  -webkit-clip-path: circle(50%);
  -webkit-shape-outside: circle(20em);
  shape-outside: circle(20em);
`

class Media extends React.Component {
  render() {
    return (
      <main>
        <PageCircle style={{marginBottom: `4rem`, marginTop: `4rem`}}>
        <PageHeading></PageHeading>
        </PageCircle>
        <MainHeading>Media.</MainHeading>
        <article style={{ padding: `5% 10% 3% 10%`, fontFamily: `Open Sans` }}>
          <Videos>
            <VideoList>
              <h2
                style={{
                  fontFamily: `'Archivo Black', Impact`,
                  paddingTop: `2rem`,
                  letterSpacing: `1px`,
                  lineHeight: `2`,
                  zIndex: `2`,
                  textAlign: `center`,
                }}
              >
                Wollstonecraft Walks
                <br />
                <i
                  style={{
                    fontSize: `1rem`,
                    letterSpacing: `2px`,
                    lineHeight: `2`,
                    textTransform: `uppercase`,
                  }}
                >
                  The Trailer
                </i>
              </h2>
              <p
                style={{
                  fontSize: `1rem`,
                  letterSpacing: `2px`,
                  lineHeight: `2`,
                  marginBottom: `3rem`,
                }}
              >
                <i>
                  Words - Kaethe Fine
                  <br />
                  Composer - Alastair Gavin
                </i>
              </p>
              <Overlay>
                <LocalVideo controls>
                  <source src={Trailer} type="video/mp4" />
                  <Hover></Hover>
                </LocalVideo>
              </Overlay>
            </VideoList>
            <VideoList>
              <h2
                style={{
                  fontFamily: `'Archivo Black', Impact`,
                  paddingTop: `2rem`,
                  letterSpacing: `1px`,
                }}
              >
                Wollstonecraft Live! 2018
              </h2>
              <p
                style={{
                  fontSize: `1rem`,
                  letterSpacing: `2px`,
                  lineHeight: `2`,
                  marginBottom: `3rem`,
                }}
              >
                <i>
                  Words - Kaethe Fine <br />
                  Composer - Alastair Gavin <br />
                  Editor - Alastair Gavin
                </i>
              </p>
              <p style={{ marginTop: `2rem` }}>
                This short film was projected on the wall of St Pancras Old
                Church to celebrate the 260th birthday of Mary Wollstonecraft
                and to make a link with the church where Mary Wollstonecraft
                married William Godwin and was later buried and the performance
                and film work of Fragments & Monuments on Newington Green,
                London, N1. We were invited to screen our film on a loop by
                invitation from the organisers of A Celebration of Mary
                Wollstonecraft (1759-1797) 27 April 2019, St Pancras Old Church,
                London NW1 1UL, organised by the Institute of English Studies,
                University of London.
              </p>
              <Overlay>
                <LocalVideo controls>
                  <source src={WLLive} type="video/mp4" />
                  <Hover></Hover>
                </LocalVideo>
              </Overlay>
            </VideoList>
          </Videos>
        </article>
        <SoundBox>
          <h3
            style={{
              fontFamily: `'Archivo Black', Impact`,
              fontSize: `1.4rem`,
              textAlign: `center`,
              letterSpacing: `1px`,
              marginBottom: `2rem`,
            }}
          >
            Wollstonecraft Walks Soundscape
          </h3>
          <p
            style={{
              fontSize: `1rem`,
              letterSpacing: `2px`,
              lineHeight: `2`,
              textAlign: `center`,
            }}
          >
            Composer - Alastair Gavin <br />
            Words - Kaethe Fine
          </p>
          <div
            style={{
              display: `grid`,
              justifyContent: `center`,
            }}
          >
            <AudioPlayer track={Soundscape} />
          </div>
        </SoundBox>
        <article style={{ padding: `5% 10% 3% 10%`, fontFamily: `Open Sans` }}>
          <Videos>
            <VideoList>
              <h2
                style={{
                  fontFamily: `'Archivo Black', Impact`,
                  paddingTop: `2rem`,
                  letterSpacing: `1px`,
                }}
              >
                Living Literature Walks
              </h2>
              <p
                style={{
                  fontSize: `1rem`,
                  letterSpacing: `2px`,
                  lineHeight: `2`,
                  marginBottom: `3rem`,
                }}
              >
                <i>Produced by Scary Little Girls</i>
              </p>
              <p style={{ marginTop: `2rem` }}>
              This short film shows clips from Living Literature Walks that Scary Little Girls have created in some of the towns and villages of Cornwall, giving a flavour of these events and the way they place performances and stories in a variety of locations in a community.  
              </p>
              <Overlay>
                <Video
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/encRQA3e-Js"
                  style={{ maxWidth: `640px`, maxHeight: `385px` }}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                >
                  <Hover></Hover>
                </Video>
              </Overlay>
              </VideoList>
            <VideoList>
              <h2
                style={{
                  fontFamily: `'Archivo Black', Impact`,
                  paddingTop: `2rem`,
                  letterSpacing: `1px`,
                  lineHeight: `2`,
                }}
              >
                Mary Wollstonecraft<br />
                <i
                  style={{
                    fontSize: `1rem`,
                    letterSpacing: `2px`,
                    lineHeight: `2`,
                    textTransform: `uppercase`,
                  }}
                >The Birthday Film
                </i>
              </h2>
  
              <p
                style={{
                  fontSize: `1rem`,
                  letterSpacing: `2px`,
                  lineHeight: `2`,
                  marginBottom: `3rem`,
                }}
              >
                <i>
                Anna Birch talks about the Mary on the Green Campaign and the Stewy stencil on the Unitarian Meeting House.
                </i>
              </p>
              <Overlay>
                <LocalVideo controls>
                  <source src={MWBirthday} type="video/mp4" />
                  <Hover></Hover>
                </LocalVideo>
              </Overlay>
            </VideoList>
          </Videos>
        </article>
      </main>
    )
  }
}

export default Media

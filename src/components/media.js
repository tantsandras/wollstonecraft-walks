import React from "react"
import styled, { keyframes } from "styled-components"
import Trailer from "../images/videos/WollstonecraftWalkstrailer2019 (1).mp4"
import WLLive from "../images/videos/WLLive3m38sFINAL.mp4"
import AudioPlayer from "../components/audioPlayer"
import Soundscape from "../audio/WL Walk soundscape.mp3"
import MWBirthday from "../images/videos/MWbirthday.mp4"
import Quote7 from "../images/posters/Quotes - vertical[1]-7.jpg"
import Quote5 from "../images/posters/Quotes - vertical[1]-5.jpg"
import Flyer from "../components/flyers"

const VideoList = styled.li`
  padding: 2rem;
  background: #241e20;
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  list-style: none;
  height: auto;
  color: white;
  max-width: 700px;
`

const Overlay = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  margin-top: 2rem;
`
const MainHeading = styled.h1`
  font-family: "Archivo Black", Impact;
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

const PdfLink = styled.a`
  color: #fffeff;
  font-family: Open Sans;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: LightBlue;
    cursor: pointer;
  }
`

const Heading = styled.h2`
  font-family: "Archivo Black", Impact;
  padding-top: 2rem;
  letter-spacing: 1px;
  line-height: 2;
  z-index: 2;
  text-align: center;
`

class Media extends React.Component {
  render() {
    return (
      <main>
        <PageCircle style={{ marginBottom: `4rem`, marginTop: `4rem` }}>
          <PageHeading></PageHeading>
        </PageCircle>
        <MainHeading>Media.</MainHeading>
        <article
          style={{
            padding: `5% 10% 3% 10%`,
            fontFamily: `Open Sans`,
            background: `url("${Quote7}") right 10% top 40%/30% no-repeat`,
          }}
        >
          <Videos>
            <VideoList>
              <Heading>
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
              </Heading>
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
                </LocalVideo>
              </Overlay>
            </VideoList>
            <VideoList>
              <Heading>Wollstonecraft Walks</Heading>
              <p style={{ marginTop: `2rem` }}>
              Fragments & Monuments and Scary
Little Girls bring Mary’s Green alive with
performance, poetry and song. In small
groups, you set off on a specially prepared
route, where hidden performers regale
you with famous words inspired by Mary,
and of course with her own work. As you
progress, you’ll discover secrets about
Mary, her life and her Green!
              </p>
              <Overlay>
                <Video
                  width="560"
                  height="315"
                  src="https://drive.google.com/file/d/1WG7FaiJ0jiRR9pJqfdDfeapiT1wMcJBQ/preview"
                  style={{ maxWidth: `640px`, maxHeight: `385px` }}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></Video>
              </Overlay>
            </VideoList>
          </Videos>
        </article>
        <article style={{ padding: `2% 10% 2% 10%` }}>
          <VideoList maxWidth="640px" style={{ margin: `0 auto` }}>
            <Overlay style={{ marginTop: `1rem`, marginBottom: `1rem` }}>
              <Video
                src="https://drive.google.com/file/d/1fD7C4xO-ZyFRFEAukWJirMvTdBrxMv6k/preview"
                width="640"
                height="480"
              ></Video>
            </Overlay>
            <PdfLink
              href="https://drive.google.com/uc?export=download&id=1fD7C4xO-ZyFRFEAukWJirMvTdBrxMv6k"
              download
            >
              Click here to download Mary Wollstonecraft Quotes
            </PdfLink>
          </VideoList>
        </article>
        <article style={{ padding: `5% 10% 0% 4%`, fontFamily: `Open Sans` }}>
          <Videos>
            <VideoList>
              <Heading>Wollstonecraft Live! 2018</Heading>
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
                </LocalVideo>
              </Overlay>
            </VideoList>
          </Videos>
        </article>
        <article style={{ padding: `0% 10% 0% 10%` }}>
          <SoundBox>
            <Heading>Wollstonecraft Walks Soundscape</Heading>
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
        </article>

        <article
          style={{
            padding: `5% 10% 3% 10%`,
            fontFamily: `Open Sans`,
            background: `url("${Quote5}") right 10% top 40%/30% no-repeat`,
          }}
        >
          <Videos>
            <VideoList>
              <Heading>Living Literature Walks</Heading>
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
                This short film shows clips from Living Literature Walks that
                Scary Little Girls have created in some of the towns and
                villages of Cornwall, giving a flavour of these events and the
                way they place performances and stories in a variety of
                locations in a community.
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
                ></Video>
              </Overlay>
            </VideoList>
            <VideoList>
              <Heading>
                Mary Wollstonecraft
                <br />
                <i
                  style={{
                    fontSize: `1rem`,
                    letterSpacing: `2px`,
                    lineHeight: `2`,
                    textTransform: `uppercase`,
                  }}
                >
                  The Birthday Film
                </i>
              </Heading>

              <p
                style={{
                  fontSize: `1rem`,
                  letterSpacing: `2px`,
                  lineHeight: `2`,
                  marginBottom: `3rem`,
                }}
              >
                <i>
                  Anna Birch talks about the Mary on the Green Campaign and the
                  Stewy stencil on the Unitarian Meeting House.
                </i>
              </p>
              <Overlay>
                <LocalVideo controls>
                  <source src={MWBirthday} type="video/mp4" />
                </LocalVideo>
              </Overlay>
            </VideoList>
          </Videos>
        </article>
        <article style={{ padding: `2% 10% 2% 10%` }}>
          <VideoList maxWidth="640px" style={{ margin: `0 auto` }}>
            <Overlay style={{ marginTop: `1rem`, marginBottom: `1rem` }}>
              <Video
                src="https://drive.google.com/file/d/13n0q7ojHbiMe0gIFyaasTn58unzvUPGl/preview"
                width="640"
                height="480"
              ></Video>
            </Overlay>
            <PdfLink
              href="https://drive.google.com/uc?export=download&id=13n0q7ojHbiMe0gIFyaasTn58unzvUPGl"
              download
            >
              Click here to download
            </PdfLink>
          </VideoList>
        </article>
        <article style={{ padding: `2% 10% 2% 10%` }}>
          <VideoList maxWidth="640px" style={{ margin: `0 auto` }}>
            <Overlay style={{ marginTop: `1rem`, marginBottom: `1rem` }}>
              <Video
                src="https://drive.google.com/file/d/1ZyQY91Vzcy1-pJtqIvkeEPAwROeDpnBm/preview"
                width="640"
                height="480"
              ></Video>
            </Overlay>
            <PdfLink
              href="https://drive.google.com/uc?export=download&id=1ZyQY91Vzcy1-pJtqIvkeEPAwROeDpnBm"
              download
            >
              Click here to download Inspirational Quotes
            </PdfLink>
          </VideoList>
        </article>
      </main>
    )
  }
}

export default Media

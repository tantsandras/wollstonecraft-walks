import React from "react"
import styled, { keyframes } from "styled-components"
import AudioPlayer from "../components/audioPlayer"
import Soundscape from "../audio/WL Walk soundscape.mp3"
import Quote7 from "../images/posters/Quote1.jpg"
import Quote5 from "../images/posters/Quote2.jpg"
import Flyer from "../components/flyer1"

const fadeInRight = keyframes`
    from {
      opacity: 0;
      transform: translateX(-15px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `

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
  font-family: "Archivo Black", "Impact";
  font-size: 2.4rem;
  text-align: center;
  letter-spacing: 1px;
  margin-top: -10rem;
  padding-left: 8rem;
  color: #333333;
  animation: ${fadeInRight} ease 1.6s forwards;
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
  padding: 6rem 0rem 4rem 0rem;
  column-gap: 4%;
  margin: 0 auto;
  grid-template-rows: repeat(3, auto);
  justify-content: center;
  font-family: Helvetica, Roboto, "Open Sans";
`
const SoundBox = styled.li`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
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
  animation: ${fadeInRight} ease 1s forwards;
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
  animation: ${fadeInRight} ease 1s forwards;
`

const PdfLink = styled.a`
  color: #fffeff;
  font-family: Helvetica, Roboto, "Open Sans";
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: LightBlue;
    cursor: pointer;
  }
`

const Heading = styled.h2`
  font-family: "Archivo Black", "Impact";
  padding-top: 2rem;
  letter-spacing: 1px;
  line-height: 1.3;
  z-index: 2;
  text-align: center;
  font-size: 1.4rem;
`

const Normal = styled.p`
  line-height: 1.8;
`

const Inspirational = ({ id }) => (
  <PdfLink
    id={id}
    href="https://drive.google.com/uc?export=download&id=1ZyQY91Vzcy1-pJtqIvkeEPAwROeDpnBm"
    download
  >
    Click here to download Inspirational Quotes
  </PdfLink>
)

class Media extends React.Component {
  render() {
    return (
      <main>
        <PageCircle style={{ marginBottom: `4rem`, marginTop: `4rem` }}>
          <PageHeading></PageHeading>
        </PageCircle>
        <MainHeading>Media</MainHeading>
        <article
          style={{
            padding: `3% 8% 3% 8%`,
            fontFamily: `Helvetica, Roboto, 'Open Sans'`,
            background: `url("${Quote7}") right 10% bottom 20%/22% no-repeat`,
          }}
        >
          <Videos>
            <VideoList
              style={{
                maxWidth: `100vw`,
                marginTop: `-5rem`,
                marginBottom: `7rem`,
                background: `none`,
                border: `none`,
                boxShadow: `none`,
              }}
            >
              <Flyer />
            </VideoList>
            <VideoList>
              <Heading>
                Wollstonecraft Walks
                <br />
                <i
                  style={{
                    fontSize: `0.9rem`,
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
                  fontSize: `0.8rem`,
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
                <Video
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/mxOMX4eSF00"
                  style={{ maxWidth: `640px`, maxHeight: `385px` }}
                  allowFullScreen
                ></Video>
              </Overlay>
            </VideoList>
            <VideoList>
              <Heading>Wollstonecraft Walks</Heading>
              <Normal style={{ marginTop: `2rem` }}>
                Fragments & Monuments and Scary Little Girls bring Mary’s Green
                alive with performance, poetry and song. In small groups, you
                set off on a specially prepared route, where hidden performers
                regale you with famous words inspired by Mary, and of course
                with her own work. As you progress, you’ll discover secrets
                about Mary, her life and her Green!
              </Normal>
              <Overlay>
                <Video
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ZUxc_R1Ib6E"
                  style={{ maxWidth: `640px`, maxHeight: `385px` }}
                  allowFullScreen
                ></Video>
              </Overlay>
            </VideoList>
          </Videos>
        </article>
        <article style={{ padding: `2% 10% 8% 10%` }}>
          <VideoList maxWidth="640px" style={{ margin: `0 auto` }}>
            <Overlay style={{ marginTop: `1rem`, marginBottom: `1rem` }}>
              <Video
                src="https://drive.google.com/file/d/1fD7C4xO-ZyFRFEAukWJirMvTdBrxMv6k/preview"
                width="640"
                height="48"
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
        <article
          style={{
            padding: `1% 10% 0% 10%`,
            fontFamily: `Helvetica, Roboto, 'Open Sans'`,
          }}
        >
          <Videos>
            <VideoList>
              <Heading>Wollstonecraft Live! 2018</Heading>
              <p
                style={{
                  fontSize: `0.8rem`,
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
              <Normal style={{ marginTop: `2rem` }}>
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
              </Normal>
              <Overlay>
                <Video
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/53ccttjCtZ4"
                  style={{ maxWidth: `640px`, maxHeight: `385px` }}
                  allowFullScreen
                ></Video>
              </Overlay>
            </VideoList>
          </Videos>
        </article>
        <article style={{ padding: `0% 8% 0% 8%` }}>
          <SoundBox>
            <Heading>Wollstonecraft Walks Soundscape</Heading>
            <p
              style={{
                fontSize: `0.8rem`,
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
            fontFamily: `Helvetica, Roboto, 'Open Sans'`,
            background: `url("${Quote5}") right 10% top 20%/22% no-repeat`,
          }}
        >
          <Videos>
            <VideoList>
              <Heading>Living Literature Walks</Heading>
              <p
                style={{
                  fontSize: `0.8rem`,
                  letterSpacing: `2px`,
                  lineHeight: `2`,
                  marginBottom: `3rem`,
                }}
              >
                <i>Produced by Scary Little Girls</i>
              </p>
              <Normal style={{ marginTop: `2rem` }}>
                This short film shows clips from Living Literature Walks that
                Scary Little Girls have created in some of the towns and
                villages of Cornwall, giving a flavour of these events and the
                way they place performances and stories in a variety of
                locations in a community.
              </Normal>
              <Overlay>
                <Video
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/encRQA3e-Js"
                  style={{ maxWidth: `640px`, maxHeight: `385px` }}
                ></Video>
              </Overlay>
            </VideoList>
            <VideoList>
              <Heading>
                Mary Wollstonecraft
                <br />
                <i
                  style={{
                    fontSize: `0.9rem`,
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
                <Video
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/TO8Z4dVRaaE"
                  style={{ maxWidth: `640px`, maxHeight: `385px` }}
                  allowFullScreen
                ></Video>
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
            <Inspirational id="inspirational" />
          </VideoList>
        </article>
      </main>
    )
  }
}

export default Media

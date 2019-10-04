import React from "react"
import styled, { keyframes } from "styled-components"
import Vindication from "../images/videos/VindicationBRIGHTER_BW.mp4"
import Logo from "../images/Wollstonecraft_portrait_logo-02 copy.png"

const ProjectHeading = styled.div`
  width: 340px;
  height: 340px;
  border-radius: 50%;
  border-left: 6px double MediumBlue;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  font-size: 1rem;
  position: relative;
  clip-path: circle(50%);
  -webkit-clip-path: circle(50%);
  float: left;
  -webkit-shape-outside: circle(20em);
  shape-outside: circle(20em);
  margin: 18% 28% 5% 1%;
`
const ProjectCircle = styled.div`
  position: relative;
  border-radius: 50%;
  margin: 0 auto;
  width: 340px;
  height: 340px;
  line-height: 200px;
  background: rgba(20, 81, 173, 0.1);
  mix-blend-mode: multiply;
  text-align: center;
  vertical-align: middle;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
`

const VideoList = styled.li`
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  list-style: none;
  height: auto;
`

const Overlay = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  background-image: linear-gradient(rgba(255,255,255,.6), rgba(255,255,255,.6)), url('${Logo}');
  background-size: 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
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
  font-family: Helvetica;
`

const Video = styled.iframe`
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  padding: 2rem;
`

const MainHeading = styled.h1`
  font-family: Yeseva One;
  font-size: 2rem;
  text-align: center;
  letter-spacing: 1px;
  margin-bottom: 4rem;
  margin-top: 10rem;
  line-height: 1.5;
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
  padding: 2rem;
`

class FmPrefAndFilm extends React.Component {
  render() {
    return (
      <main>
        <MainHeading>
          Fragments & Monuments<br /> Preformance and Film Archive
        </MainHeading>
        <article style={{ padding: `5% 10% 3% 10%`, fontFamily: `Helvetica` }}>
          <Videos>
          <div
                 style={{
                  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
                  background: `rgba(255, 255, 255, 0.98)`,
                  padding: `2rem`,
                }}
              >
                <h2
                  style={{
                    fontFamily: `Yeseva One`,
                    letterSpacing: `1px`,
                    textTransform: `uppercase`,
                    marginTop: `3rem`,
                  }}
                >
                  Vindication
                </h2>
                <i
                  style={{
                    fontSize: `1rem`,
                    letterSpacing: `2px`,
                    lineHeight: `2`,
                  }}
                >
                  by Kaethe Fine (2005) new B&amp;W version AB (2018)
                </i>
                <p style={{ marginTop: `2rem` }}>
                  The French Revolution is simmering and issues of racial,
                  economic and religious equality is at stake. In this imagined
                  moment in the life of Mary Wollstonecraft (1759-1797), she
                  meets with her friends, a group of 18th Century Rational
                  Dissenters, to discuss her own difficulties making ends meet.
                  During this meeting Mary declares pleasure to Thomas Paine
                  that he was inspired by her work to write his famous The
                  Rights of Man. She is snubbed by her future husband, William
                  Godwin, for making the assertion but Paine confirms it. She
                  carries on expressing her frustration with the demands of
                  being a woman in a society that does not recognize a woman's
                  right to own anything, be educated or even pursue a career, at
                  which point Paine encourages her to focus in on those issues
                  and write what she is now most known for, A Vindication of the
                  Rights of Women. She became the first person to speak out and
                  be heard on the silent subject of gender equality.
                </p>
              </div>
            <VideoList>
              
              <Overlay>

                <LocalVideo controls>
                  <source src={Vindication} type="video/mp4" />
                </LocalVideo>
              </Overlay>
            </VideoList>
          </Videos>
          <span
            style={{ width: `100%`, margin: `0 auto`, display: `inline-block` }}
          >
            <ProjectHeading>
              <ProjectCircle>
                <h2
                  style={{
                    fontFamily: `Yeseva One`,
                    fontSize: `1.2rem`,
                    textAlign: `center`,
                    letterSpacing: `1px`,
                    paddingTop: `130px`,
                    marginBottom: `200px`,
                    lineHeight: `2`,
                  }}
                >
                  Wollstonecraft Live!
                  <br />
                  <i
                    style={{
                      fontFamily: `Yeseva One`,
                      fontSize: `1rem`,
                      textAlign: `center`,
                      letterSpacing: `1px`,
                      marginTop: `1rem`,
                    }}
                  >
                    by Kaethe Fine 2005
                  </i>
                </h2>
              </ProjectCircle>
            </ProjectHeading>
            <p
              style={{
                fontSize: `0.8rem`,
                marginTop: `24rem`,
                paddingTop: `2rem`,
                width: `66%`,
                marginLeft: `1.4rem`,
              }}
            >
              <i
                style={{
                  fontSize: `1rem`,
                  letterSpacing: `2px`,
                  lineHeight: `2`,
                }}
              >
                Script{" "}
              </i>
              - Kaethe Fine
              <br />
              <i
                style={{
                  fontSize: `1rem`,
                  letterSpacing: `2px`,
                  lineHeight: `2`,
                }}
              >
                Director{" "}
              </i>
              - Anna Birch
              <br />
              <i
                style={{
                  fontSize: `1rem`,
                  letterSpacing: `2px`,
                  lineHeight: `2`,
                }}
              >
                Composer{" "}
              </i>
              - Alastair Gavin <br />
              <i
                style={{
                  fontSize: `1rem`,
                  letterSpacing: `2px`,
                  lineHeight: `2`,
                }}
              >
                Movement{" "}
              </i>
              - Sarah Rubidge <br />
              <i
                style={{
                  fontSize: `1rem`,
                  letterSpacing: `2px`,
                  lineHeight: `2`,
                }}
              >
                Voice{" "}
              </i>
              - Sheila Landahl
              <br />
            </p>
          </span>
          <Videos>
            <VideoList>
              <Overlay>
                <h2
                  style={{
                    fontFamily: `Yeseva One`,
                    paddingBottom: `2rem`,
                    letterSpacing: `1px`,
                    paddingLeft: `2rem`,
                  }}
                >
                  Part 1
                </h2>
                <Video
                  title="Wollstonecraft Live video, Part 1"
                  src="https://www.youtube.com/embed/vSFDuNrA_lA"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  style={{ maxWidth: `640px`, maxHeight: `385px` }}
                  allowFullScreen
                ></Video>
              </Overlay>
            </VideoList>
            <VideoList>
              <Overlay>
                <h2
                  style={{
                    fontFamily: `Yeseva One`,
                    paddingBottom: `2rem`,
                    letterSpacing: `1px`,
                    paddingLeft: `2rem`,
                  }}
                >
                  Part 2
                </h2>
                <Video
                  title="Wollstonecraft Live video, Part 2"
                  src="https://www.youtube.com/embed/i5Uxlj9eDNI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  style={{ maxWidth: `640px`, maxHeight: `385px` }}
                  allowFullScreen
                ></Video>
              </Overlay>
            </VideoList>
            <VideoList>
              <Overlay>
                <h2
                  style={{
                    fontFamily: `Yeseva One`,
                    paddingBottom: `2rem`,
                    letterSpacing: `1px`,
                    paddingLeft: `2rem`,
                  }}
                >
                  Part 3
                </h2>
                <Video
                  title="Wollstonecraft Live video, Part 3"
                  src="https://www.youtube.com/embed/PLOLhxc5wqE"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  style={{ maxWidth: `640px`, maxHeight: `385px` }}
                  allowFullScreen
                ></Video>
              </Overlay>
            </VideoList>
          </Videos>
        </article>
        <article style={{ padding: `5% 10% 3% 10%`, fontFamily: `Helvetica` }}>
          <VideoList>
            <Overlay>
              <h2
                style={{
                  fontFamily: `Yeseva One`,
                  paddingBottom: `2rem`,
                  letterSpacing: `1px`,
                  paddingLeft: `2rem`,
                }}
              ></h2>
              <Video
                src="https://www.youtube.com/embed/nDSlEmgryyA"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                style={{ maxWidth: `640px`, maxHeight: `385px` }}
                allowFullScreen
              ></Video>
            </Overlay>
          </VideoList>
        </article>
      </main>
    )
  }
}

export default FmPrefAndFilm

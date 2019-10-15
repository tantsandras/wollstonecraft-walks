import React from "react"
import styled, { keyframes } from "styled-components"
import Vindication from "../images/videos/VindicationBRIGHTER_BW.mp4"
import Logo from "../images/Wollstonecraft_portrait_logo-02 copy.png"
import Flyer from "../components/flyers"
import MOW from "../images/posters/MoW Poster-1.jpg"
import Quote7 from "../images/posters/Quotes - vertical[1]-7.jpg"
import Quote5 from "../images/posters/Quotes - vertical[1]-5.jpg"

const ProjectHeading = styled.div`
  text-align: center;
  font-size: 1rem;
  position: relative;
  margin: 2% 6% 3% 1%;
  float: left;
`

const VideoList = styled.li`
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  list-style: none;
  height: auto;
  position: relative;
  overflow: auto;
  max-width: 900px;
`

const Overlay = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  background-image: linear-gradient(rgba(255,255,255,.6), rgba(255,255,255,.6)), url('${Logo}');
  background-size: 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left;
`

const Videos = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(300px, 2fr));
  grid-gap: 1rem;
  padding: 4rem 2rem 4rem 2rem;
  column-gap: 4%;
  margin: 0 auto;
  grid-template-rows: repeat(3, auto);
  justify-content: center;
  font-family: Open Sans;
  position: relative;
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
  font-family: 'Archivo Black', Impact;
  font-size: 2rem;
  text-align: center;
  letter-spacing: 1px;
  margin-bottom: 4rem;
  margin-top: 4rem;
  line-height: 1.5;
  background-size: cover;
  padding: 2rem 2rem;
  display: grid;
  align-items: center
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
      <main style={{fontFamily: `Open Sans`, backgroundColor: `#241E20`, padding: `3% 10% 0% 10%`, color: `#FFFEFF`}}>
        <MainHeading>
          Fragments & Monuments
          <br /> 
          <i
                  style={{
                    fontFamily: `'Archivo Black', Impact`,
                    fontSize: `1.4rem`,
                    letterSpacing: `1px`,
                    lineHeight: `2`,
                    paddingTop: `1rem`
                  }}
                >Preformance and Film Archive</i>
        </MainHeading>
        <article style={{ padding: `0% 5% 0% 5%`, fontFamily: `Open Sans`, background: `url("${Quote7}") right 0% top 0%/48% no-repeat`, }}>
          <Videos>
        
            <div
              style={{
                borderLeft: `2px solid crimson`,
                borderTop: `2px solid crimson`,
                borderBottom: `2px solid rgba(0, 0, 0, 0.2)`,
                borderRight: `2px solid rgba(0, 0, 0, 0.2)`,
                boxShadow: `-14px -14px 1px #241E20, -16px -16px 0px 0px crimson`,
                background: `#241E20`,
                padding: `2rem`,
                maxWidth: `500px`,
                marginTop: `8rem`
              }}
            >
              <h2
                style={{
                  fontFamily: `'Archivo Black', Impact`,
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
                moment in the life of Mary Wollstonecraft (1759-1797), she meets
                with her friends, a group of 18th Century Rational Dissenters,
                to discuss her own difficulties making ends meet. During this
                meeting Mary declares pleasure to Thomas Paine that he was
                inspired by her work to write his famous The Rights of Man. She
                is snubbed by her future husband, William Godwin, for making the
                assertion but Paine confirms it. She carries on expressing her
                frustration with the demands of being a woman in a society that
                does not recognize a woman's right to own anything, be educated
                or even pursue a career, at which point Paine encourages her to
                focus in on those issues and write what she is now most known
                for, A Vindication of the Rights of Women. She became the first
                person to speak out and be heard on the silent subject of gender
                equality.
              </p>
            </div>
            <li
              style={{
                height: `auto`,
                listStyle: `none`,
                maxWidth: `900px`,
              }}
            >
              <div
                style={{
                  position: `relative`,
                  overflow: `hidden`,
                  paddingTop: `56.25%`,
                }}
              >
                <LocalVideo controls style={{float: `right`}}>
                  <source src={Vindication} type="video/mp4" />
                </LocalVideo>
              </div>
            </li>
          </Videos>
          </article>
          <article
          style={{
            padding: `0% 10% 16% 10%`,
            fontFamily: `Open Sans`,
          }}
        >
        <Flyer />
        </article>
          <article style={{ padding: `10% 5% 0% 5%`, fontFamily: `Open Sans` }}>
          <span
            style={{ width: `100%`, margin: `0 auto`, display: `inline-block`, height: `360px`, paddingTop: `2rem`, marginTop: `12rem`}}
          >
            <ProjectHeading>
              <h2
                style={{
                  fontFamily: `'Archivo Black', Impact`,
                  fontSize: `180%`,
                  verticalAlign: `bottom`,
                  textAlign: `center`,
                  letterSpacing: `1px`,
                  lineHeight: `1.5`,
                }}
              >
                Wollstonecraft Live!
                <br />
                <i
                  style={{
                    fontFamily: `'Archivo Black', Impact`,
                    fontSize: `1rem`,
                    textAlign: `left`,
                    letterSpacing: `1px`,
                  }}
                >
                  by Kaethe Fine 2005
                </i>
              </h2>
            </ProjectHeading>
            <p
              style={{
                fontSize: `0.8rem`,
                width: `78%`,
                marginLeft: `0.2rem`,
                float: `right`,
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
            <h2
              style={{
                fontFamily: `'Archivo Black', Impact`,
                letterSpacing: `1px`,
                textTransform: `uppercase`,
                marginTop: `1rem`,
                textAlign: `left`,
                borderTop: `2px solid #FFFEFF`,
                paddingTop: `1rem`
              }}
            >
              Part 1
            </h2>
            <li
              style={{
                height: `auto`,
                listStyle: `none`,
                maxWidth: `900px`,
              }}
            >
              <div
                style={{
                  position: `relative`,
                  overflow: `hidden`,
                  paddingTop: `56.25%`,
                  marginBottom: `1rem`
                }}
              >
                <Video
                  title="Wollstonecraft Live video, Part 1"
                  src="https://www.youtube.com/embed/vSFDuNrA_lA"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  style={{ maxWidth: `640px`, maxHeight: `385px` }}
                  allowFullScreen
                ></Video>
              </div>
            </li>
            <h2
              style={{
                fontFamily: `'Archivo Black', Impact`,
                letterSpacing: `1px`,
                textTransform: `uppercase`,
                marginTop: `2rem`,
                textAlign: `left`,
                borderTop: `2px solid #FFFEFF`,
                paddingTop: `1rem`
              }}
            >
              Part 2
            </h2>
            <li
              style={{
                height: `auto`,
                listStyle: `none`,
                maxWidth: `900px`,
              }}
            >
              <div
                style={{
                  position: `relative`,
                  overflow: `hidden`,
                  paddingTop: `56.25%`,
                  marginBottom: `1rem`
                }}
              >
                <Video
                  title="Wollstonecraft Live video, Part 2"
                  src="https://www.youtube.com/embed/i5Uxlj9eDNI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  style={{ maxWidth: `640px`, maxHeight: `385px` }}
                  allowFullScreen
                ></Video>
              </div>
            </li>
            <h2
              style={{
                fontFamily: `'Archivo Black', Impact`,
                letterSpacing: `1px`,
                textTransform: `uppercase`,
                marginTop: `2rem`,
                textAlign: `left`,
                borderTop: `2px solid #FFFEFF`,
                paddingTop: `1rem`,
              }}
            >
              Part 3
            </h2>
            <li
              style={{
                height: `auto`,
                listStyle: `none`,
                maxWidth: `900px`,
              }}
            >
              <div
                style={{
                  position: `relative`,
                  overflow: `hidden`,
                  paddingTop: `56.25%`,
                  marginBottom: `1rem`
                }}
              >
                <Video
                  title="Wollstonecraft Live video, Part 3"
                  src="https://www.youtube.com/embed/PLOLhxc5wqE"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  style={{ maxWidth: `640px`, maxHeight: `385px` }}
                  allowFullScreen
                ></Video>
              </div>
            </li>
          </Videos>
        </article>

        <article
          style={{
            padding: `6% 5% 1% 5%`,
            fontFamily: `Open Sans`,
            background: `url("${Quote5}") right 0% top 0%/48% no-repeat`,
          }}
        >
          <Videos>
            <div
              style={{
                borderLeft: `2px solid #FF008A`,
                borderTop: `2px solid #FF008A`,
                borderBottom: `2px solid rgba(0, 0, 0, 0.2)`,
                borderRight: `2px solid rgba(0, 0, 0, 0.2)`,
                boxShadow: `-14px -14px 1px #241E20, -16px -16px 0px 0px #FF008A`,
                background: `#241E20`,
                padding: `2rem`,
                maxWidth: `440px`,
                marginTop: `8rem`,

              }}
            >
              <h3
                style={{
                  fontFamily: `'Archivo Black', Impact`,
                  letterSpacing: `1px`,
                  textTransform: `uppercase`,
                  marginTop: `3rem`,
                }}
              >
                Wollstonecraft Live!
              </h3>
              <i
                style={{
                  fontSize: `1rem`,
                  letterSpacing: `2px`,
                  lineHeight: `2`,
                }}
              >
                Written by Kaethe Fine <br />
                Concieved by Kaethe Fine and Anna Birch <br />
                Produced and directed by Anna Birch <br />
              </i>
              <p style={{ marginTop: `2rem` }}>
                Meet Mary Wollstonecraft (1759-1797), Britain's first feminist.
                She articulated the case for women's suffrage, wrote A
                Vindication of the Rights of Women and gave birth to Mary
                Shelley who wrote Frankenstein.
              </p>
            </div>
            <li
              style={{
                height: `auto`,
                listStyle: `none`,
                maxWidth: `900px`,
              }}
            >
              <div
                style={{
                  position: `relative`,
                  overflow: `hidden`,
                  paddingTop: `56.25%`,
                }}
              >
                <Video
                  src="https://www.youtube.com/embed/nDSlEmgryyA"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  style={{ maxWidth: `640px`, maxHeight: `385px` }}
                  allowFullScreen
                ></Video>
              </div>
            </li>
          </Videos>
        </article>

        <article
          style={{
            padding: `1% 10% 1% 10%`,
            fontFamily: `Open Sans`,
            transform: `translateY(-400px)`,
            background: `no-repeat right/47% url("${MOW}")`,
            position: `relative`,
          }}
        >
          <Videos>
            <li
              style={{
                height: `auto`,
                listStyle: `none`,
                transform: `translateY(300px)`,
              }}
            >
              <h2
                style={{
                  fontFamily: `'Archivo Black', Impact`,
                  letterSpacing: `1px`,
                  textTransform: `uppercase`,
                  marginTop: `3rem`,
                  textAlign: `right`,
                }}
              >
                March <br />
                <i
                  style={{
                    fontSize: `1rem`,
                    letterSpacing: `2px`,
                    lineHeight: `2`,
                    textAlign: `right`,
                    marginBottom: `3rem`,
                  }}
                >
                  The trailer
                </i>
              </h2>

              <div
                style={{
                  position: `relative`,
                  overflow: `hidden`,
                  paddingTop: `56.25%`,
                }}
              >
                <Video
                  src="https://www.youtube.com/embed/lwH_fA5e64I"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  style={{ maxWidth: `640px`, maxHeight: `385px` }}
                  allowFullScreen
                ></Video>
              </div>
            </li>
            <div
              style={{
                borderLeft: `2px solid #0031AD`,
                borderTop: `2px solid #0031AD`,
                borderBottom: `2px solid rgba(0, 0, 0, 0.2)`,
                borderRight: `2px solid rgba(0, 0, 0, 0.2)`,
                boxShadow: `-14px -14px 1px #241E20, -16px -16px 0px 0px #0031AD`,
                background: `#241E20`,
                padding: `2rem`,
                marginTop: `18rem`,
                float: `left`,
                maxWidth: `500px`,
              }}
            >
              <h2
                style={{
                  fontFamily: `'Archivo Black', Impact`,
                  letterSpacing: `1px`,
                  textTransform: `uppercase`,
                }}
              >
                March
              </h2>
              <i
                style={{
                  fontSize: `1rem`,
                  letterSpacing: `2px`,
                  lineHeight: `2`,
                }}
              >
                A Glasgow Women's Library and Royal Conservatoire of Scotland
                Film
              </i>
              <p style={{ marginTop: `2rem` }}>
                <i
                  style={{
                    fontSize: `1rem`,
                    letterSpacing: `2px`,
                    lineHeight: `2`,
                  }}
                >
                  Film-maker{" "}
                </i>
                - Marissa Keating
                <br />
                <i
                  style={{
                    fontSize: `1rem`,
                    letterSpacing: `2px`,
                    lineHeight: `2`,
                  }}
                >
                  Artistic Director{" "}
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
                  Subtitles{" "}
                </i>
                - Stagetext www.stagetext.org
                <br />
                <p style={{ marginTop: `2rem` }}>
                  'March' documents a large scale, public art event March of
                  Women taking to the streets of Bridgeton on the eve of
                  International Women's Day 2015. Taking Cicely Hamilton's
                  popular suffragette play 'A Pageant of Great Women', as a
                  starting point the diverse community of women in Glasgow in
                  2015 is bought to the screen. Through a series of interviews
                  with a wide variety of women taking part in the performance
                  and march, the film considers the gap in documenting women's
                  history, and points to the resounding importance of having a
                  female generation to both honour and draw inspiration from. It
                  follows the process of the plays development within a
                  community of Scottish women from boat builders, to students,
                  librarians and politicians, as they work together towards the
                  final event on March 7 2015. The film gives a lingering
                  insight into some of political and social experiences of women
                  in Scotland today, and invites testament to the tremendous
                  power of a collective voice, and the surprising resonance of a
                  play written over a century ago with our contemporary society.
                </p>
                <p>
                  {" "}
                  <i
                    style={{
                      fontSize: `1rem`,
                      letterSpacing: `2px`,
                      lineHeight: `2`,
                      textTransform: `uppercase`,
                    }}
                  >
                    Password
                  </i>{" "}
                  March
                </p>
              </p>
            </div>
            <li style={{ height: `auto`, listStyle: `none` }}>
              <div
                style={{
                  position: `relative`,
                  overflow: `hidden`,
                  paddingTop: `56.25%`,
                }}
              >
                <Video
                  src="http://player.vimeo.com/video/149630321"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  style={{ maxWidth: `640px`, minWidth: `240`, maxHeight: `385px`, minHeight: `185px` }}
                  allowFullScreen
                ></Video>
              </div>
            </li>
          </Videos>
        </article>
      </main>
    )
  }
}

export default FmPrefAndFilm

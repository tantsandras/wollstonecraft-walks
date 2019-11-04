import React from "react"
import styled, { keyframes } from "styled-components"
import MOW from "../images/posters/MoW Poster-1 (1).jpg"
import QuoteAnne from "../images/posters/Insprational Quotes_compressed-05.jpg"
import QuoteAudre from "../images/posters/Insprational Quotes_compressed-12.jpg"
import ArtBook from "../components/artBook"

const turnVisible = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

const ProjectHeading = styled.div`
  text-align: center;
  font-size: 1rem;
  position: relative;
  margin: 2% 6% 3% 1%;
  float: left;
`

const VideoList = styled.li`
  padding: 2rem;
  background: #fffeff; 
  box-shadow: 0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04);
  list-style: none;
  height: auto;
  color: #241e20;
  max-width: 700px;
`

const Overlay = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  margin-top: 2rem;
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

const MainHeading = styled.h1`
  font-family: "Archivo Black", 'Impact';
  font-size: 2rem;
  text-align: center;
  letter-spacing: 1px;
  margin-bottom: 4rem;
  margin-top: 4rem;
  line-height: 1.5;
  background-size: cover;
  padding: 2rem 2rem;
  display: grid;
  align-items: center;
  animation: ${turnVisible} 0.6s ease-in;
`
const Box = styled.li`
  padding: 1.6rem;
  background: #fffeff;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04);
  list-style: none;
  min-height: 220px;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 300px);
`

const PdfLink = styled.a`
  color: #241e20;
  font-family: Helvetica, Roboto, "Open Sans";
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: MediumBlue;
    cursor: pointer;
  }
`
const Heading = styled.h2`
  font-family: "Archivo Black", 'Impact';
  padding-top: 2rem;
  letter-spacing: 1px;
  line-height: 2;
  z-index: 2;
  text-align: left;
  text-transform: uppercase;
  font-size: 1.3rem;
  color: #333333;
`

const Normal = styled.p`
  line-height: 1.8;
`

const Credits = styled.h5`
  font-family: Helvetica, Roboto, "Open Sans";
  letter-spacing: 2px;
  font-weight: normal;
  font-size: 0.9rem;
  line-height: 1.8;
`

class FmPrefAndFilm extends React.Component {
  render() {
    return (
      <main
        style={{
          fontFamily: `Helvetica, Roboto, 'Open Sans'`,
          color: `#333333`,
        }}
      >
        <MainHeading>
          Fragments & Monuments

          <b
            style={{
              fontFamily: `'Archivo Black', 'Impact'`,
              fontSize: `1.2rem`,
              letterSpacing: `1px`,
              lineHeight: `2`,
              paddingTop: `1rem`,
              textAlign: `center`,
            }}
          >
            Performance and Film Archive
          </b>
          </MainHeading>
        
        <article style={{ padding: `0% 8% 3% 8%` }}>
          <VideoList style={{ margin: `0 auto`}}>
            <Overlay style={{ marginTop: `1rem`, marginBottom: `1rem`}}>
              <Video
                src="https://drive.google.com/file/d/1O7ChTQmz1xgOhd0zr7KB4eCf77VPzEsi/preview"
                width="400px"
                height="100%"
                frameborder="0"
                allowFullScreen
              ></Video>
            </Overlay>
            <PdfLink
              href="https://drive.google.com/uc?export=download&id=1O7ChTQmz1xgOhd0zr7KB4eCf77VPzEsi"
              download
            >
              Click here to download Wollstonecraft Live! Poster
            </PdfLink>
          </VideoList>
        </article>
        <span
          style={{
            width: `100%`,
            margin: `0 auto`,
            display: `inline-block`,
            padding: `1% 8% 0% 8%`,
          }}
        >
          <ProjectHeading>
            <Heading
              style={{
                verticalAlign: `bottom`,
                lineHeight: `1.5`,
              }}
            >
              Wollstonecraft Live!
              <br />
            </Heading>
            
            <Normal style={{ marginTop: `1rem`, textAlign: `left` }}>
                Meet Mary Wollstonecraft (1759-1797), Britain's first feminist.
                She articulated the case for women's suffrage, wrote A
                Vindication of the Rights of Women and gave birth to Mary
                Shelley who wrote Frankenstein.
              </Normal>
          </ProjectHeading>
          <p
            style={{
              fontSize: `0.9rem`,
              float: `right`,
              marginTop: `1.4rem`,
              marginLeft: `0.2rem`,
              zIndex: `2`
            }}
          >
            <i
              style={{
                
                letterSpacing: `2px`,
                
              }}
            >
              Written by{" "}
            </i>
            - Kaethe Fine
            <br />
            <i
              style={{
                
                letterSpacing: `2px`,
                
              }}
            >
              Conceived by{" "}
            </i>
            - Kaethe Fine and Anna Birch
            <br />
            <i
              style={{
                
                letterSpacing: `2px`,
                
              }}
            >
              Produced and directed by{" "}
            </i>
            - Anna Birch <br />
          </p>
        </span>
        <ul
          style={{
            padding: `0% 8% 0% 8%`,
            fontFamily: `Helvetica, Roboto, 'Open Sans'`,
            color: `#241E20`,
            display: `grid`,
            gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
            gridGap: `1rem`,
            columnGap: `6%`,
            margin: `0 auto`,
          }}
        >
          <Box>
            <Heading
              style={{
                borderTop: `2px solid #241E20`,
                paddingTop: `1rem`,
              }}
            >
              Part 1
            </Heading>
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
                  marginBottom: `1rem`,
                }}
              >
                <Video
                  title="Wollstonecraft Live video, Part 1"
                  src="https://www.youtube.com/embed/vSFDuNrA_lA"
                  style={{ maxWidth: `640px`, maxHeight: `385px` }}
                  allowFullScreen
                ></Video>
              </div>
            </li>
          </Box>
          <Box>
            <Heading
              style={{
                borderTop: `2px solid #241E20`,
                paddingTop: `1rem`,
              }}
            >
              Part 2
            </Heading>
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
                  marginBottom: `1rem`,
                }}
              >
                <Video
                  title="Wollstonecraft Live video, Part 2"
                  src="https://www.youtube.com/embed/i5Uxlj9eDNI"
                  style={{ maxWidth: `640px`, maxHeight: `385px` }}
                  allowFullScreen
                ></Video>
              </div>
            </li>
          </Box>
          <Box>
            <Heading
              style={{
                borderTop: `2px solid #241E20`,
                paddingTop: `1rem`,
              }}
            >
              Part 3
            </Heading>
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
                  marginBottom: `1rem`,
                }}
              >
                <Video
                  title="Wollstonecraft Live video, Part 3"
                  src="https://www.youtube.com/embed/PLOLhxc5wqE"
                  style={{ maxWidth: `640px`, maxHeight: `385px` }}
                  allowFullScreen
                ></Video>
              </div>
            </li>
          </Box>
        </ul>
        <article
          style={{
            padding: `1% 8% 1% 8%`,
            fontFamily: `Helvetica, Roboto, 'Open Sans'`,
            background: `url("${QuoteAudre}") right 11% top 40%/28% no-repeat`,
          }}
        >
          <Videos>
            <VideoList
              style={{
                borderLeft: `2px solid #FF008A`,
                borderTop: `2px solid #FF008A`,
                borderBottom: `1px solid rgba(0, 0, 0, 0.2)`,
                borderRight: `1px solid rgba(0, 0, 0, 0.2)`,
                boxShadow: `-14px -14px 1px #FFFEFF, -16px -16px 0px 0px #FF008A`,
              }}
            >
              <Heading style={{fontSize: `1.2rem`}}>The Wollstonecraft Live Experience!</Heading>
              <Credits>
                2007 Outdoor film screening and live music on Newington Green
              </Credits>
              <Overlay>
                <Video
                  src="https://www.youtube.com/embed/nDSlEmgryyA"
                  style={{ maxWidth: `640px`, maxHeight: `385px` }}
                  allowFullScreen
                ></Video>
              </Overlay>
            </VideoList>
          </Videos>
        </article>

        <article style={{ padding: `2% 10% 1% 10%` }}>
          <VideoList maxWidth="640px" style={{ margin: `0 auto` }}>
            <Overlay style={{ marginTop: `0rem`, marginBottom: `1rem`}}>
              <Video
                src="https://drive.google.com/file/d/12kmTYcHpoR4O3k9WgzTpvnjgiDFS-9fw/preview"
                width="640"
                height="480"
                allowFullScreen
              ></Video>
            </Overlay>
            <PdfLink
              href="https://drive.google.com/uc?export=download&id=12kmTYcHpoR4O3k9WgzTpvnjgiDFS-9fw"
              download
            >
              Click here to download front of Wollstonecraft Live Experience flyer
            </PdfLink>

            <Overlay style={{ marginTop: `2rem`, marginBottom: `1rem` }}>
              <Video
                src="https://drive.google.com/file/d/1PqeTfCrcP--0F73gPkOeEt2wah6x8y3f/preview"
                width="640"
                height="480"
                allowFullScreen
              ></Video>
            </Overlay>
            <PdfLink
              href="https://drive.google.com/uc?export=download&id=1PqeTfCrcP--0F73gPkOeEt2wah6x8y3f"
              download
            >
              Click here to download back of Wollstonecraft Live Experience flyer
            </PdfLink>
          </VideoList>
        </article>
        <article
          style={{
            padding: `0% 8% 0% 8%`,
            fontFamily: `Helvetica, Roboto, 'Open Sans'`,
            background: `url("${QuoteAnne}") right 11% top 30%/26% no-repeat`,
          }}
        >
          <Videos>
            <VideoList
              style={{
                borderLeft: `2px solid crimson`,
                borderTop: `2px solid crimson`,
                borderBottom: `1px solid rgba(0, 0, 0, 0.2)`,
                borderRight: `1px solid rgba(0, 0, 0, 0.2)`,
                boxShadow: `-14px -14px 1px #FFFEFF, -16px -16px 0px 0px crimson`,
              }}
            >
              <Heading>Vindication</Heading>
              <Credits>
                by Kaethe Fine (2005) new B&amp;W version AB (2018)
              </Credits>
              <Normal style={{ marginTop: `2rem` }}>
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
              </Normal>
              <Overlay>
                <Video
                  style={{ float: `right` }}
                  src="https://www.youtube.com/embed/ehCTNvc89UQ"
                  width="640"
                  height="480"
                  allowFullScreen
                ></Video>
              </Overlay>
            </VideoList>
          </Videos>
        </article>
        <ArtBook />
        <article
          style={{
            padding: `2% 8% 3% 8%`,
            fontFamily: `Helvetica, Roboto, 'Open Sans'`,
            background: `url("${MOW}") right 11% top 50%/24% no-repeat`,
            color: `#241E20`,
          }}
        >
          <Videos>
            <li
              style={{
                height: `auto`,
                listStyle: `none`,
                maxWidth: `900px`,
              }}
            >
              <Heading
                style={{
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
              </Heading>

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
                  style={{ maxWidth: `640px`, maxHeight: `385px` }}
                  allowFullScreen
                ></Video>
              </div>
            </li>
            <VideoList
              style={{
                borderLeft: `2px solid #0031AD`,
                borderTop: `2px solid #0031AD`,
                borderBottom: `1px solid rgba(0, 0, 0, 0.2)`,
                borderRight: `1px solid rgba(0, 0, 0, 0.2)`,
                boxShadow: `-14px -14px 1px #FFFEFF, -16px -16px 0px 0px #0031AD`,
              }}
            >
              <Heading>March</Heading>
              <Credits>
                A Glasgow Women's Library and Royal Conservatoire of Scotland
                Film
              </Credits>
              <p
                style={{
                  fontSize: `0.8rem`,
                  marginTop: `1rem`,
                  marginLeft: `0.2rem`,
                }}
              >
                <i
                  style={{
                    fontSize: `0.8rem`,
                    letterSpacing: `2px`,
                  }}
                >
                  Film-maker{" "}
                </i>
                - Marissa Keating
                <br />
                <i
                  style={{
                    fontSize: `0.8rem`,
                    letterSpacing: `2px`,
                  }}
                >
                  Artistic Director{" "}
                </i>
                - Anna Birch
                <br />
                <i
                  style={{
                    fontSize: `0.8rem`,
                    letterSpacing: `2px`,
                  }}
                >
                  Subtitles{" "}
                </i>
                - Stagetext www.stagetext.org
              </p>
              <Normal style={{ marginTop: `2rem` }}>
                'March' documents a large scale, public art event March of Women
                taking to the streets of Bridgeton on the eve of International
                Women's Day 2015. Taking Cicely Hamilton's popular suffragette
                play 'A Pageant of Great Women', as a starting point the diverse
                community of women in Glasgow in 2015 is bought to the screen.
                Through a series of interviews with a wide variety of women
                taking part in the performance and march, the film considers the
                gap in documenting women's history, and points to the resounding
                importance of having a female generation to both honour and draw
                inspiration from. It follows the process of the plays
                development within a community of Scottish women from boat
                builders, to students, librarians and politicians, as they work
                together towards the final event on March 7 2015. The film gives
                a lingering insight into some of political and social
                experiences of women in Scotland today, and invites testament to
                the tremendous power of a collective voice, and the surprising
                resonance of a play written over a century ago with our
                contemporary society.
              </Normal>
              <Normal>
                {" "}
                <Credits style={{ textTransform: `uppercase` }}>
                  Password
                </Credits>{" "}
                March
              </Normal>

              <Overlay>
<Normal style={{transform: `translateY(-40px)`}}>If the video hasn't showed up, it can be found here: <br /> <a
              href="https://player.vimeo.com/video/149630321"
              target="_blank"
              rel="noopener noreferrer"
              style={{cursor: `pointer`}}
              >https://player.vimeo.com/video/149630321</a></Normal>
                <Video
                  src="https://player.vimeo.com/video/149630321"
                  frameBorder="0"
                  style={{
                    maxWidth: `640px`,
                    minWidth: `240`,
                    maxHeight: `385px`,
                    minHeight: `185px`,
                  }}
                  allowFullScreen
                ></Video>
              </Overlay>
            </VideoList>
          </Videos>
        </article>
      </main>
    )
  }
}

export default FmPrefAndFilm
